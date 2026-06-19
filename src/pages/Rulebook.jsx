import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/common/Navbar';

const rules = [
  { title: "Speaker Format", content: "Asian Parliamentary Debate consists of 3 speakers per side. Each speech is 7 minutes long. Protected minutes are the first and last minute of the speech." },
  { title: "Points of Information (POIs)", content: "POIs are permitted between the 1st and 6th minute. The speaker may choose to accept or decline any POI offered." },
  { title: "Adjudication Criteria", content: "Adjudicators award points based on Matter (content), Manner (style), and Method (structure). Low-point wins are strictly prohibited." },
];

const Rulebook = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <Navbar />
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-5xl font-serif text-primary mb-12 text-center">Rulebook</h1>
        <div className="space-y-4">
          {rules.map((rule, idx) => (
            <div key={idx} className="border border-primary/10 rounded-2xl bg-white/30 overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-6 text-left font-serif text-xl text-primary flex justify-between items-center"
              >
                {rule.title}
                <span>{openIndex === idx ? '-' : '+'}</span>
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="px-6 pb-6 text-sm font-sans text-secondary leading-relaxed">
                    {rule.content}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rulebook;