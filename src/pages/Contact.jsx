import React from "react";
import Navbar from "../components/Navbar";

const Contact = () => {
  const handleContactClick = () => {
    const phoneNumber = "919999999999";
    const message = "Hello, I'm interested in your services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
  };

  return ( 
  <div>
        <Navbar/>
        <div className="min-h-screen flex items-center justify-center bg-cover bg-center p-4" style={{backgroundImage: `url('/contact.webp')`, }}>
            <div className="backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-10 text-center transform transition duration-700 ease-out animate-fadeInScale">
                <h1 className="text-3xl text-white font-bold mb-4">Welcome to Ayuda Support</h1>
                <p className="text-white mb-6">Click below to contact us on WhatsApp.</p>
                <button onClick={handleContactClick}className="bg-green-700 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-xl transition duration-300 cursor-pointer">Contact on WhatsApp</button>
            </div>

            <style>
                {`
                @keyframes fadeInScale {
                    0% {
                    opacity: 0;
                    transform: scale(0.95);
                    }
                    100% {
                    opacity: 1;
                    transform: scale(1);
                    }
                }
                .animate-fadeInScale {
                    animation: fadeInScale 0.8s ease-out forwards;
                }
                `}
            </style>
        </div>
   </div>
  );
};

export default Contact;

