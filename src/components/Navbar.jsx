import React from "react";
import { Link } from "react-router-dom"; // import Link

const Navbar = () => {
  const links = [
    { name: "Services", path: "/service" },
    { name: "Our Work", path: "/our-work" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <div className="fixed z-[999] w-full px-20 py-10 font-['Montserrat'] flex items-center justify-between">
      <Link to="/" className="logo special text-xl font-extrabold">
        AYUDA🌱
      </Link>

      <div className="links flex gap-10">
        {links.map((link, index) => (
          <Link 
            key={index} 
            to={link.path} 
            className={`text-lg capitalize font-light ${index === 4 ? "ml-35" : ""}`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
