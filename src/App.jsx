import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

import Home from './components/Home';
import Auth from './pages/Auth.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Ours from './pages/Our-work.jsx';
import Contact from './pages/Contact.jsx';

import { auth } from './firebase.config.js';
import { onAuthStateChanged } from 'firebase/auth';

const App = () => {
  const [user, setUser] = useState(null);
  const location = useLocation();

  
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      console.log("Current User:", currentUser);
      setUser(currentUser);
    });

    return () => unsub(); 
  }, []);


  useEffect(() => {
    const scrollContainer = document.querySelector('[data-scroll-container]');
    if (!scrollContainer) return;

    const scroll = new LocomotiveScroll({
      el: scrollContainer,
      smooth: true,
      multiplier: 0.7,
    });

    return () => {
      scroll.destroy(); 
    };
  }, [location.pathname]); 
  return (
    <div data-scroll-container>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Auth />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/our-work" element={<Ours />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
