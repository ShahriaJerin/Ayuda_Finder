import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const Landing = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.3" className="w-full h-screen bg-zinc-900 pt-5">
      <div className="textstructure mt-40 px-20">
        {["We create", "Personalized", "REMEDIES"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-baseline">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="w-[8.5vw] h-[6vw] bg-[url(https://images.pexels.com/photos/105028/pexels-photo-105028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] bg-cover bg-center rounded-lg"
                  ></motion.div>
                )}
                <h1 className="uppercase text-[7.4vw] leading-[7vw] tracking-tight font-['Oswald'] font-semibold">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-25 flex item-center justify-between py-5 px-20 font-['Montserrat'] font-extralight">
        {[
          "Based on ancient Ayurvedic wisdom",
          "Powered by AI, tailored for your symptoms",
        ].map((item, index) => (
          <p className="text-md font-light tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-2">
          <div className="px-5 py-1 border-[1px] border-zinc-500 rounded-full font-light text-md capitalize">
            START YOUR HEALING JOURNEY
          </div>
          <div className="w-8 h-8 flex items-center justify-center border-[1.7px] border-zinc-400 rounded-full">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
