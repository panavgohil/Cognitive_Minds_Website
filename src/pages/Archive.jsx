import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/common/Navbar';

// Data from 19th IITB IV (Oct 2025)
const motionsDatabase = [
  { id: 1, text: "THS the usage of statistical risk assessment by US courts in pre-trial decisions", category: "Economics & Policy", year: "2025", tournament: "IITB IV - Round 1" },
  { id: 2, text: "THS governments banning foreign ownership of media covering local or national news", category: "Technology & Media", year: "2025", tournament: "IITB IV - Round 2" },
  { id: 3, text: "THBT multilateral development banks should cease financing all greenfield infrastructure in environmentally sensitive regions (Amazon, Congo Basin, Himalayas, etc.)", category: "Economics & Policy", year: "2025", tournament: "IITB IV - Round 3" },
  { id: 4, text: "In rapidly urbanising regions, THS local governments actively employing Land Value Capture measures", category: "Economics & Policy", year: "2025", tournament: "IITB IV - Round 4" },
  { id: 5, text: "THP a world with a dominant norm of maintaining both a polite public persona and emotional distance toward those outside one's immediate circle, as opposed to a world with a dominant norm of being emotionally expressive and authentic with those outside one's immediate circle", category: "Philosophy & Ethics", year: "2025", tournament: "IITB IV - Round 5" },
  { id: 6, text: "THS social justice movements in South Asia framing their advocacy through the concept of dharma (duty and moral responsibility)", category: "Social Justice & Feminism", year: "2025", tournament: "IITB IV - Pre-Quarters" },
  { id: 7, text: "THBT Moldova should pursue accelerated EU accession, even at the expense of its relations with Russia.", category: "International Relations", year: "2025", tournament: "IITB IV - Quarterfinals" },
  { id: 8, text: "THR the rise of social-media-based self-disclosure groups for mental health", category: "Technology & Media", year: "2025", tournament: "IITB IV - Novice Semifinals" },
  { id: 9, text: "THBT adults have a greater moral obligation towards vulnerable strangers than towards their self-sufficient parents", category: "Philosophy & Ethics", year: "2025", tournament: "IITB IV - Semifinals" },
  { id: 10, text: "THBT feminists should support the legalization of surrogacy for profit.", category: "Social Justice & Feminism", year: "2025", tournament: "IITB IV - Novice Finals" },
  { id: 11, text: "During times of ethno-religious conflicts, THS governments deploying the national military at religious places of worship that are likely to be affected by the conflict", category: "International Relations", year: "2025", tournament: "IITB IV - Grand Final" }
];

const categories = ["All", "Economics & Policy", "International Relations", "Philosophy & Ethics", "Social Justice & Feminism", "Technology & Media"];

const Archive = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredMotions = motionsDatabase.filter(motion => {
    const matchesSearch = motion.text.toLowerCase().includes(searchQuery.toLowerCase()) || motion.tournament.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || motion.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif text-primary mb-6">Motion Archive</h1>
          <p className="text-sm md:text-base font-sans text-secondary">A database of past debate motions.</p>
        </div>

        <div className="mb-12 flex flex-col gap-6">
          <input 
            type="text" 
            placeholder="Search motions..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-2xl mx-auto bg-white/50 border border-primary/10 rounded-2xl px-6 py-4 text-primary focus:outline-none focus:border-accent"
          />
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full font-sans text-xs ${activeCategory === category ? 'bg-primary text-white' : 'bg-transparent text-secondary border border-primary/10'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredMotions.map((motion) => (
            <div key={motion.id} className="bg-white/40 border border-primary/10 rounded-3xl p-8 flex flex-col justify-between shadow-sm">
              <div className="mb-6">
                <span className="text-[10px] font-bold uppercase text-accent tracking-widest">{motion.category}</span>
                <h3 className="text-xl font-serif text-primary mt-2">"{motion.text}"</h3>
              </div>
              <div className="text-[10px] font-bold uppercase text-secondary/60 tracking-widest border-t pt-4">
                {motion.tournament} • {motion.year}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Archive;