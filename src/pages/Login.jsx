import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.config';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) return alert('Email and password are required!');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Login successful');
      navigate('/');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-4 w-80 mx-auto mt-[14vw]">
      <h2 className="text-center text-2xl font-bold">Login</h2>
      <input
        type="email"
        placeholder="Email"
        className="p-2 rounded bg-zinc-800 text-white"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="p-2 rounded bg-zinc-800 text-white"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded" type="submit">
        Login
      </button>
    </form>
  );
}

export default Login;
