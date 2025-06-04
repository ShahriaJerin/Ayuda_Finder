import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase.config';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from 'firebase/auth';
import { motion, AnimatePresence } from 'framer-motion';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) return alert('Email and password are required!');

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        alert('Login successful');
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        alert('Signup successful!');
      }
      navigate('/');
    } catch (err) {
      alert(err.message);
    }
  };

  const formVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1a1f1e] to-[#2d352f] text-white font-['Montserrat']">
      <div className="w-96 bg-zinc-900 p-8 rounded-xl shadow-lg">
        <AnimatePresence mode="wait">
          <motion.form
            key={isLogin ? 'login' : 'signup'}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={formVariants}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <h2 className="text-center text-2xl font-bold tracking-wide">
              {isLogin ? 'Login to Ayuda🌱' : 'Sign Up for Ayuda🌱'}
            </h2>

            <input
              type="email"
              placeholder="Email"
              className="p-2 rounded bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="p-2 rounded bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white py-2 rounded transition duration-300"
            >
              {isLogin ? 'Login' : 'Sign Up'}
            </button>

            <p className="text-center text-sm mt-4">
              {isLogin ? (
                <>
                  New here?{' '}
                  <span
                    className="text-green-400 cursor-pointer underline"
                    onClick={() => setIsLogin(false)}
                  >
                    Sign up now!
                  </span>
                </>
              ) : (
                <>
                  Already have an account?{' '}
                  <span
                    className="text-green-400 cursor-pointer underline"
                    onClick={() => setIsLogin(true)}
                  >
                    Login instead
                  </span>
                </>
              )}
            </p>
          </motion.form>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Auth;
