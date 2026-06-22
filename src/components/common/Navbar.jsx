import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, LogIn, LogOut, UserRound } from 'lucide-react';
import { supabase } from '../../lib/supabaseClient';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Council', path: '/council' },
  { name: 'Archive', path: '/archive' },
  { name: 'Competitions', path: '/competitions' },
  { name: 'Rulebook', path: '/rulebook' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Recruitment', path: '/recruitment' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [session, setSession] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
    setIsOpen(false);
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-black/5"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 cursor-pointer">
            <Link to="/" className="text-xl font-serif font-semibold tracking-wide text-primary">
              Cognitive Minds
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-sans transition-colors duration-300 relative group font-medium ${
                    isActive ? 'text-primary' : 'text-secondary hover:text-accent'
                  }`
                }
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            ))}
            
            {session ? (
              <Link
                to="/dashboard"
                aria-label="Open member profile"
                title="Member profile"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/15 bg-white/50 text-primary shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:shadow-md"
              >
                <UserRound size={18} strokeWidth={1.8} />
              </Link>
            ) : (
              <Link
                to="/login"
                className="flex items-center gap-2 rounded-full border border-primary/20 px-5 py-2 text-sm font-medium text-primary transition-all duration-300 hover:bg-primary hover:text-white"
              >
                <LogIn size={16} />
                Log In
              </Link>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-primary hover:text-accent transition-colors">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="md:hidden bg-background border-b border-black/5">
          <div className="px-6 pt-2 pb-6 space-y-4 flex flex-col">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-lg font-serif ${isActive ? 'text-primary' : 'text-secondary hover:text-accent'}`
                }
              >
                {link.name}
              </NavLink>
            ))}
            {session ? (
              <div className="mt-4 grid grid-cols-[1fr_auto] gap-3">
                <Link
                  to="/dashboard"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-medium text-white"
                >
                  <UserRound size={18} /> Member Profile
                </Link>
                <button
                  onClick={handleLogout}
                  aria-label="Log out"
                  title="Log out"
                  className="flex items-center justify-center rounded-lg border border-red-500/20 px-4 text-red-600"
                >
                  <LogOut size={18} />
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-medium text-white"
              >
                <LogIn size={18} />
                Member Log In
              </Link>
            )}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
