import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Trophy, Medal, Star, Crown, Mic } from 'lucide-react';

const achievementsData = [
  { icon: <Crown size={32} strokeWidth={1.5} />, title: "Champions", tournament: "Asian Parliamentary Debate", desc: "Secured the gold in a 64-team national circuit, remaining undefeated.", year: "2024" },
  { icon: <Medal size={32} strokeWidth={1.5} />, title: "Best Speaker", tournament: "National Law University Open", desc: "Awarded the best individual speaker out of 200+ participants.", year: "2024" },
  { icon: <Trophy size={32} strokeWidth={1.5} />, title: "Runners Up", tournament: "St. Stephen's Mukharji Memorial", desc: "Reached the grand finals of one of the oldest debate tournaments in the country.", year: "2023" },
  { icon: <Star size={32} strokeWidth={1.5} />, title: "Quarter-finalists", tournament: "World Universities Debating Champ.", desc: "Represented DTU on the global stage against international Ivy League teams.", year: "2023" },
  { icon: <Mic size={32} strokeWidth={1.5} />, title: "Best Adjudicator", tournament: "Delhi University Debate Circuit", desc: "Recognized for exceptional judging accuracy and feedback quality.", year: "2023" }
];

const Achievements = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-transparent">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 mb-12">
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[#B89200] font-sans text-xs tracking-[0.3em] uppercase font-bold mb-4">Hall of Fame</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-5xl md:text-6xl font-serif text-primary tracking-tight">Recent Achievements</motion.h2>
        </div>
        <motion.div style={{ x }} className="flex gap-8 px-6 lg:px-12 w-max">
          {achievementsData.map((item, index) => (
            <div key={index} className="w-[300px] md:w-[400px] h-[400px] md:h-[450px] bg-background rounded-3xl p-8 flex flex-col justify-between border border-primary/5 shadow-sm hover:shadow-md transition-shadow duration-300 group">
              <div>
                <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center text-accent mb-8 group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                <h3 className="text-2xl md:text-3xl font-serif text-primary mb-2">{item.title}</h3>
                <p className="text-sm font-sans text-secondary font-medium tracking-widest uppercase mb-4">{item.tournament}</p>
                <p className="text-base font-sans text-secondary/80 leading-relaxed">{item.desc}</p>
              </div>
              <div className="pt-4 border-t border-primary/10 flex justify-between items-center">
                <span className="text-xs font-sans text-secondary font-bold tracking-widest">{item.year}</span>
                <span className="text-xs font-sans text-accent font-semibold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">Read More</span>
              </div>
            </div>
          ))}
          <div className="w-[10vw]"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
