import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-background py-24 md:py-32 relative border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} className="text-accent font-sans text-xs tracking-[0.3em] uppercase font-semibold mb-6">About</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: 0.1 }} className="text-5xl md:text-6xl lg:text-7xl font-serif text-primary tracking-tight leading-[1.1]">Cognitive Minds</motion.h2>
          </div>
          <div className="lg:col-span-7 flex flex-col gap-10 lg:pt-16">
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: 0.2 }} className="text-2xl md:text-3xl lg:text-4xl font-serif text-primary leading-snug tracking-tight">We are the premier debating and public speaking society of Delhi Technological University.</motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: 0.3 }} className="flex flex-col gap-6 text-base md:text-lg text-secondary font-sans leading-relaxed font-light">
              <p>Founded on the principles of intellectual rigor and articulate expression, we cultivate an environment where ideas are challenged, structured, and delivered with absolute precision.</p>
              <p>From dominating national parliamentary circuits to hosting DTU's most prestigious discourse events, our legacy is built on a culture of competitive excellence. We do not just teach you how to speak; we teach you how to think.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;