import React from 'react';
import Navbar from '../components/common/Navbar';
import Hero from '../components/home/Hero';
import Impact from '../components/home/Impact';
import About from '../components/home/About';
import Achievements from '../components/home/Achievements';

const Home = () => {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <main>
        <Hero />
        <Impact />
        <About />
        <Achievements />
      </main>
    </div>
  );
};

export default Home;