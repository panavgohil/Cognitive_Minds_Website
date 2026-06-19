import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/common/Navbar';

// Placeholder data - later this will come from your backend (Supabase)
const memberData = {
  name: "Panav Gohil",
  branch: "Computer Engineering",
  batch: "Class of 2026",
  role: "Senior Adjudicator",
  experience: "2 Years",
  totalComps: 12,
  winRate: "75%",
  recentCompetitions: [
    { id: 1, name: "Asian Parliamentary Debate", role: "Speaker", result: "Champions", date: "Mar 2024" },
    { id: 2, name: "National Law University Open", role: "Adjudicator", result: "Best Adjudicator", date: "Jan 2024" },
    { id: 3, name: "St. Stephen's Memorial", role: "Speaker", result: "Quarter-finalist", date: "Nov 2023" },
  ]
};

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background pt-28 pb-20">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <p className="text-accent font-sans text-xs tracking-[0.3em] uppercase font-bold mb-4">Member Portal</p>
          <h1 className="text-5xl md:text-6xl font-serif text-primary mb-4">Welcome back,<br />{memberData.name.split(' ')[0]}.</h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT COLUMN: Identity & Stats (4 columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-4 flex flex-col gap-8"
          >
            {/* ID Card */}
            <div className="bg-white/50 backdrop-blur-md border border-primary/10 rounded-3xl p-8 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
              
              <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-serif text-2xl mb-6">
                {memberData.name.charAt(0)}
              </div>
              
              <h2 className="text-2xl font-serif text-primary mb-1">{memberData.name}</h2>
              <p className="text-sm font-sans font-semibold tracking-widest uppercase text-accent mb-6">{memberData.role}</p>
              
              <div className="space-y-4">
                <div>
                  <p className="text-[10px] font-sans font-bold uppercase tracking-widest text-secondary/70 mb-1">Branch</p>
                  <p className="text-sm font-sans text-primary font-medium">{memberData.branch}</p>
                </div>
                <div>
                  <p className="text-[10px] font-sans font-bold uppercase tracking-widest text-secondary/70 mb-1">Batch</p>
                  <p className="text-sm font-sans text-primary font-medium">{memberData.batch}</p>
                </div>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/50 border border-primary/10 rounded-2xl p-6 flex flex-col items-center text-center">
                <span className="text-3xl font-serif text-primary mb-1">{memberData.totalComps}</span>
                <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-secondary">Tournaments</span>
              </div>
              <div className="bg-white/50 border border-primary/10 rounded-2xl p-6 flex flex-col items-center text-center">
                <span className="text-3xl font-serif text-primary mb-1">{memberData.experience}</span>
                <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-secondary">Experience</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Experience & Competitions (8 columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-8 flex flex-col gap-6"
          >
            <h3 className="text-2xl font-serif text-primary border-b border-primary/10 pb-4 mb-2">Tournament History</h3>
            
            <div className="flex flex-col gap-4">
              {memberData.recentCompetitions.map((comp) => (
                <div key={comp.id} className="group flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-white/30 hover:bg-white/80 border border-primary/5 hover:border-primary/20 rounded-2xl transition-all duration-300">
                  
                  <div className="flex flex-col gap-1 mb-4 sm:mb-0">
                    <h4 className="text-lg font-serif text-primary">{comp.name}</h4>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-sans font-semibold tracking-widest uppercase text-accent">{comp.role}</span>
                      <span className="w-1 h-1 rounded-full bg-primary/20"></span>
                      <span className="text-xs font-sans text-secondary">{comp.date}</span>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <span className="px-4 py-2 bg-primary/5 text-primary font-sans text-xs font-bold tracking-wider uppercase rounded-lg">
                      {comp.result}
                    </span>
                  </div>

                </div>
              ))}
            </div>
            
            <button className="mt-4 py-4 w-full border border-dashed border-primary/20 rounded-2xl text-sm font-sans font-semibold tracking-widest uppercase text-secondary hover:text-primary hover:border-primary/40 hover:bg-white/50 transition-all duration-300">
              + Log New Tournament
            </button>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;