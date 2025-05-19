
import React from 'react';
import ParticlesBackground from '@/components/layout/ParticlesBackground';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/home/Hero';
import TechStack from '@/components/home/TechStack';
import Metrics from '@/components/home/Metrics';
import Footer from '@/components/layout/Footer';

const Index: React.FC = () => {
  return (
    <>
      <ParticlesBackground />
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <Metrics />
      </main>
      <Footer />
    </>
  );
};

export default Index;
