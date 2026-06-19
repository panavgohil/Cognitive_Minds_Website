import React from 'react';
import { motion } from 'framer-motion';
import cmLogo from '../../assets/logo/cm-logo.jpg'; 

const Hero = () => {
  const containerVariants = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } } };
  const textVariants = { hidden: { opacity: 0, y: 30, filter: 'blur(10px)' }, show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } } };
  const logoVariants = { hidden: { opacity: 0, scale: 0.8, filter: 'blur(10px)' }, show: { opacity: 1, scale: 1, filter: 'blur(0px)', transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] } } };

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-background">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
      <motion.div variants={containerVariants} initial="hidden" animate="show" className="relative z-10 flex flex-col items-center w-full max-w-7xl px-4">
        <motion.div variants={logoVariants} className="mb-10 md:mb-12 relative">
          <motion.div animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.6, 0.4] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="absolute -inset-4 bg-accent/20 blur-2xl rounded-full"></motion.div>
          <motion.div animate={{ y: [-5, 5, -5] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }} className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border border-primary/10 shadow-2xl flex items-center justify-center bg-white relative z-10">
             <img src={cmLogo} alt="Logo" className="w-full h-full object-cover scale-[1.02]" />
          </motion.div>
        </motion.div>
        <motion.h1 variants={textVariants} className="text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-serif text-primary mb-4 md:mb-6 tracking-tight leading-[1.1] text-center">Cognitive Minds</motion.h1>
        <motion.p variants={textVariants} className="text-[9px] sm:text-xs md:text-sm font-sans text-secondary uppercase tracking-[0.25em] sm:tracking-[0.4em] font-semibold text-center">Delhi Technological University</motion.p>
      </motion.div>
    </section>
  );
};

export default Hero;