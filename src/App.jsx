import React, { useEffect, useState } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import Home from './components/Home'

import Auth from './pages/Auth.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Ours from './pages/Our-work.jsx';
import Contact from './pages/Contact.jsx';

import { Routes, Route } from 'react-router-dom';
import { auth } from './firebase.config.js';
import { onAuthStateChanged } from 'firebase/auth';

const App = () => {
  const [user, setUser] = useState(null);
  const locomotiveScroll = new LocomotiveScroll();
  
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      console.log("Current User:", currentUser);
      setUser(currentUser);
    });
  return () => unsub();
}, []);

return (
<Routes>
  <Route path="/" element={user ? <Home /> : <Auth />} />
  <Route path="/auth" element={<Auth />} />
  <Route path="/about" element={<About />} />
  <Route path="/service" element={<Services />} />
  <Route path='/our-work' element={<Ours />} />
  <Route path='/contact' element={<Contact />} />
</Routes>
);
}

export default App;
