import { motion } from 'framer-motion';
import React from 'react';

const Marquee = () => {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="0.1" className='w-full h-[90vh] py-25 bg-[#004D43] rounded-t-[1.5vw] '>
            <div className='text pb-4 border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden'>
                <motion.h1 intial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear", repeat: Infinity, duration:10}} className='text-[20vw] leading-none font-["Oswald"] font-[1000] uppercase pr-10'>we are Ayuda</motion.h1>
                <motion.h1 intial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear", repeat: Infinity, duration:10}} className='text-[20vw] leading-none font-["Oswald"] font-[1000] uppercase pr-10'>we are ayuda</motion.h1>
            </div>
        </div>
    );
}

export default Marquee;
