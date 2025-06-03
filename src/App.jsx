import React, { useEffect, useState } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import Home from './components/Home'


import SignUp from './Pages/SignUp.jsx';
import Login from './Pages/Login.jsx';
import About from './pages/about.jsx';
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
      <Route path="/" element={user ? <Home /> : <Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Services />} />
      <Route path='/our-work' element={<Ours/>} />
      <Route path='/contact' element={<Contact/>} />
  </Routes>
);
}

export default App;
