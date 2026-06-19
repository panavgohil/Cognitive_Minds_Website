import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabaseClient';
import Navbar from '../components/common/Navbar';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const Dashboard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [member, setMember] = useState({ 
    full_name: '', branch: '', current_year: '', role: '', 
    linkedin_url: '', instagram_url: '' 
  });
  const [tournaments, setTournaments] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      const { data: profile } = await supabase.from('profiles').select('*').eq('id', user.id).single();
      if (profile) setMember(profile);
      
      const { data: tourneyData } = await supabase.from('tournaments').select('*').eq('user_id', user.id);
      if (tourneyData) setTournaments(tourneyData);
    }
  };

  const handleSave = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    await supabase.from('profiles').upsert({ id: user.id, ...member });
    setIsEditing(false);
    fetchData();
  };

  const handleAddTournament = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { data: { user } } = await supabase.auth.getUser();
    
    await supabase.from('tournaments').insert([{
      user_id: user.id,
      name: formData.get('name'),
      role: formData.get('role'),
      result: formData.get('result'),
      date: formData.get('date'),
    }]);
    
    e.target.reset();
    fetchData();
  };

  return (
    <div className="min-h-screen bg-background pt-28 pb-20">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16 flex justify-between items-end">
          <div>
            <p className="text-accent font-sans text-xs tracking-[0.3em] uppercase font-bold mb-4">Member Portal</p>
            <h1 className="text-5xl font-serif text-primary">Welcome back.</h1>
          </div>
          <button 
            onClick={isEditing ? handleSave : () => setIsEditing(true)}
            className="px-6 py-3 bg-primary text-white rounded-xl font-sans text-sm font-semibold hover:bg-primary/90 transition-all"
          >
            {isEditing ? "Save Profile" : "Edit Profile"}
          </button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Profile Card Section */}
          <motion.div className="lg:col-span-4 bg-white/50 backdrop-blur-md border border-primary/10 rounded-3xl p-8 shadow-sm h-fit relative">
            {isEditing ? (
              <div className="space-y-4">
                <input name="full_name" value={member.full_name || ''} onChange={(e) => setMember({...member, full_name: e.target.value})} className="w-full p-4 bg-white border border-primary/10 rounded-xl font-sans text-sm" placeholder="Full Name" />
                <input name="role" value={member.role || ''} onChange={(e) => setMember({...member, role: e.target.value})} className="w-full p-4 bg-white border border-primary/10 rounded-xl font-sans text-sm" placeholder="Role" />
                <input name="branch" value={member.branch || ''} onChange={(e) => setMember({...member, branch: e.target.value})} className="w-full p-4 bg-white border border-primary/10 rounded-xl font-sans text-sm" placeholder="Branch" />
                <input name="current_year" value={member.current_year || ''} onChange={(e) => setMember({...member, current_year: e.target.value})} className="w-full p-4 bg-white border border-primary/10 rounded-xl font-sans text-sm" placeholder="Year" />
                <input name="linkedin_url" value={member.linkedin_url || ''} onChange={(e) => setMember({...member, linkedin_url: e.target.value})} className="w-full p-4 bg-white border border-primary/10 rounded-xl font-sans text-sm" placeholder="LinkedIn URL" />
                <input name="instagram_url" value={member.instagram_url || ''} onChange={(e) => setMember({...member, instagram_url: e.target.value})} className="w-full p-4 bg-white border border-primary/10 rounded-xl font-sans text-sm" placeholder="Instagram URL" />
              </div>
            ) : (
              <div className="space-y-6">
                <h2 className="text-2xl font-serif text-primary">{member.full_name || "Set your name"}</h2>
                <p className="text-sm font-sans font-semibold uppercase text-accent">{member.role || "Role"}</p>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/70 mb-1">Branch</p>
                  <p className="text-sm font-sans text-primary">{member.branch || "N/A"}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/70 mb-1">Year</p>
                  <p className="text-sm font-sans text-primary">{member.current_year || "N/A"}</p>
                </div>
                
                {/* Social Icons positioned at bottom right */}
                <div className="absolute bottom-6 right-8 flex gap-4">
                  {member.linkedin_url && (
                    <a href={member.linkedin_url} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors">
                      <FaLinkedin size={24} />
                    </a>
                  )}
                  {member.instagram_url && (
                    <a href={member.instagram_url} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors">
                      <FaInstagram size={24} />
                    </a>
                  )}
                </div>
              </div>
            )}
          </motion.div>

          {/* Tournament History Section */}
          <div className="lg:col-span-8 bg-white/30 border border-primary/5 rounded-3xl p-10">
            <h3 className="text-2xl font-serif text-primary mb-6">Tournament History</h3>
            
            <form onSubmit={handleAddTournament} className="grid grid-cols-2 gap-4 mb-8 bg-white/50 p-6 rounded-2xl border border-primary/10">
              <input name="name" placeholder="Tournament Name" className="p-3 rounded-xl border border-primary/10" required />
              <input name="role" placeholder="Role" className="p-3 rounded-xl border border-primary/10" required />
              <input name="result" placeholder="Result" className="p-3 rounded-xl border border-primary/10" required />
              <input name="date" placeholder="Date" className="p-3 rounded-xl border border-primary/10" required />
              <button type="submit" className="col-span-2 bg-primary text-white py-3 rounded-xl font-semibold hover:bg-primary/90 transition-all">
                + Log Tournament
              </button>
            </form>

            <div className="space-y-4">
              {tournaments.length > 0 ? tournaments.map((t) => (
                <div key={t.id} className="p-4 bg-white rounded-xl border border-primary/10 flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-primary">{t.name}</h4>
                    <p className="text-xs text-secondary">{t.role} • {t.date}</p>
                  </div>
                  <span className="text-sm font-bold text-accent">{t.result}</span>
                </div>
              )) : <p className="text-secondary italic">No tournaments added yet.</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;