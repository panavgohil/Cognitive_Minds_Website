import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, LogIn, LogOut } from 'lucide-react';
import { supabase } from '../../lib/supabaseClient';
import { useNavigate } from 'react-router-dom';

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
      className="fixed top-0 left-0 right-0 z-50 bg-[#F8F4E8]/80 backdrop-blur-md border-b border-black/5"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 cursor-pointer">
            <a href="/" className="text-xl font-serif font-semibold tracking-wide text-primary">
              Cognitive Minds
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.path} className="text-sm font-sans text-secondary hover:text-accent transition-colors duration-300 relative group font-medium">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            
            {session ? (
              <button 
                onClick={handleLogout}
                className="flex items-center gap-2 px-5 py-2 rounded-full border border-red-500/20 text-red-600 hover:bg-red-50 transition-all duration-300 font-sans text-sm font-medium"
              >
                <LogOut size={16} />
                Logout
              </button>
            ) : (
              <a href="/login" className="flex items-center gap-2 px-5 py-2 rounded-full border border-primary/20 text-primary hover:bg-primary hover:text-white transition-all duration-300 font-sans text-sm font-medium">
                <LogIn size={16} />
                Log In
              </a>
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
              <a key={link.name} href={link.path} className="text-lg font-serif text-secondary hover:text-accent">{link.name}</a>
            ))}
            {session ? (
              <button onClick={handleLogout} className="mt-4 flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-red-50 text-red-600 font-sans text-sm font-medium">
                <LogOut size={18} /> Logout
              </button>
            ) : (
              <a href="/login" className="mt-4 flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-primary text-white font-sans text-sm font-medium">
                <LogIn size={18} /> Log In
              </a>
            )}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;