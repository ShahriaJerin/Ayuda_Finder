import React from 'react';
import Navbar from '../components/Navbar';
import Landing from '../components/Landing';
import Marquee from '../components/Marquee';
import About from './Abt';
import Eyes from '../components/Eyes';
import Featured from '../components/Featured';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';

const Home = () => {
  return (
    <div className='w-full min-h-screen text-white bg-zinc-900'>
      <Navbar />
      <Landing />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Home;
