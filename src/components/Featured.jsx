import { motion, useAnimation } from "framer-motion";
import React from "react";

const Featured = () => {
  const cards = [useAnimation(), useAnimation()]

  const handlehover = (index)=>{
    cards[index].start({y: "0"})
  }

  const handlehoverEnd = (index)=>{
    cards[index].start({y: "100%"})
  }

  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className='text-7xl font-["Montserrat"] tracking-tighter'>
          Moments of Impact
        </h1>
      </div>
      <div className="cards w-full flex gap-10 mt-10 px-20">
        <motion.div onHoverStart={()=>handlehover(0)} onHoverEnd={()=>handlehoverEnd(0)} className="cardcontainer relative w-1/2 h-[80vh]">
          <h1 className='flex overflow-hidden absolute z-[9] text-8xl font-["Oswald"] font-bold left-full top-1/2 -translate-1/2 text-[#CDEA68]'>
            {"HEALED".split("").map((item, index) => (
              <motion.span initial={{y: "100%"}} animate={cards[0]} transition={{ease: [0.22 , 1 ,0.36,1], delay: index*0.05}} className="inline-block">
                {item}
              </motion.span>
            ))}
          </h1>
          <div className="w-full h-full rounded-xl overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://www.thermofisher.com/blog/behindthebench/wp-content/uploads/sites/9/2016/01/Ayurveda-making.jpg"
              alt=""
            />
          </div>
        </motion.div>
        <motion.div onHoverStart={()=>handlehover(1)} onHoverEnd={()=>handlehoverEnd(1)} className="cardcontainer relative w-1/2 h-[80vh]">
          <motion.h1 className='flex overflow-hidden absolute z-[9] text-8xl font-["Oswald"] font-bold right-full top-1/2 translate-x-1/2 -translate-y-1/2 text-[#CDEA68]'>
            {"BALANCED".split("").map((item, index) => (
            <motion.span initial={{y: "100%"}} animate={cards[1]} transition={{ease: [0.22 , 1 ,0.36,1], delay: index*0.05}} className="inline-block">
            {item}
          </motion.span>
            ))}
          </motion.h1>
          <div className="w-full h-full rounded-xl overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://cdn.britannica.com/11/196511-050-F63E85DD/man-ingredients-apothecary-Asian.jpg"
              alt=""
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Featured;
