import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.config';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async () => {
    if (!email || !password) {
      return alert("Please enter both email and password");
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Signup successful!');
      navigate('/'); // redirect to home
    } catch (err) {
      console.error("Signup Error:", err);
      alert(err.message);
    }
  };

  return (
    <div className="flex flex-col gap-4 w-80 mx-auto mt-20">
      <h2 className="text-center text-2xl font-bold">Sign Up</h2>
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
      <button
        className="bg-green-500 hover:bg-green-600 text-white py-2 rounded"
        onClick={handleSignUp}
      >
        Sign Up
      </button>
    </div>
  );
}

export default SignUp;
