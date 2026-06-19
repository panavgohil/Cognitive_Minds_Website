import React, { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';

const Counter = ({ from, to, suffix }) => {
  const nodeRef = useRef();
  const inView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration: 2, ease: "easeOut",
        onUpdate(value) { if (nodeRef.current) nodeRef.current.textContent = Math.round(value) + suffix; }
      });
      return () => controls.stop();
    }
  }, [from, to, inView, suffix]);

  return <span ref={nodeRef} className="text-6xl md:text-7xl lg:text-8xl font-serif text-primary mb-2 block">{from}{suffix}</span>;
};

const Impact = () => {
  const stats = [
    { num: 15, suffix: "+", label: "National Competitions" },
    { num: 50, suffix: "+", label: "Active Members" },
    { num: 1000, suffix: "+", label: "Archived Motions" },
    { num: 20, suffix: "+", label: "Awards Won" },
  ];

  return (
    <section className="min-h-screen w-full flex flex-col justify-center px-6 md:px-12 py-20 bg-background relative border-t border-primary/10">
      <div className="max-w-7xl mx-auto w-full mb-16 md:mb-20">
        <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} className="text-[#B89200] font-sans text-xs tracking-[0.3em] uppercase font-bold mb-4">Impact</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: 0.1 }} className="text-5xl md:text-6xl font-serif text-primary tracking-tight">Numbers That Matter</motion.h2>
      </div>
      <div className="max-w-7xl mx-auto w-full border-y border-primary/10">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-primary/10">
          {stats.map((stat, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: index * 0.15, duration: 0.8, ease: "easeOut" }} className="flex flex-col py-10 px-4 md:px-8 first:pl-0 lg:first:pl-4">
              <Counter from={0} to={stat.num} suffix={stat.suffix} />
              <span className="text-xs md:text-sm font-sans text-secondary uppercase tracking-widest leading-relaxed max-w-[150px] font-medium">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;