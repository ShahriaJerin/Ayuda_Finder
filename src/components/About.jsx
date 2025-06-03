import React from 'react';

const About = () => {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-0.1" className='w-full -mt-[10vw] py-20 bg-[#CDEA68] rounded-t-[1.5vw] text-black'>
            <h1 className='pt-5 pl-20 pb-15 font-["Montserrat"] m-0 text-[3.2vw] font-medium tracking-tigher scale-y-110 leading-[4vw]'>Ayuda is a modern Ayurvedic platform for conscious individuals and health-focused businesses seeking personalized remedies, simplified healing, and science-backed wellness.</h1>
            <div className='flex items-start justify-between px-20 border-t-2 border-b-2 border-[#b3cf57] text-[1.1vw]'>
                <h1 className='mt-[1vw]'>What you can expect:</h1>
                <div className='w-[23%] mt-[1vw] mb-[8vw]'>
                    {["We work with individuals and wellness innovators who are transforming how the world heals — from AI-powered remedies to herbal wellness brands", "We believe the right mix of data, tradition, and design is what makes healing effective, accessible, and deeply human."].map((item,index)=>(
                        <h1 key={index} className={`flex flex-col ${index===1 && "mt-[3vw]"}`}>{item}</h1>
                    ))}
                </div>
                <div className='flex flex-col mt-[12vw]'>
                    {["S:","instagram","Behance","Facebook","Linkedin"].map((item,index)=>(
                        <a key={index} className={`capitalize ${index===0 && "mb-8"}`}>{item}</a>
                    ))}
                </div>
            </div>
            <div className='px-20 pt-5 flex justify-between'>
                <div>
                    <h1 className='text-6xl'>Our approach:</h1>
                    <div>
                        <button className='bg-zinc-900 text-white px-6 py-3 mt-4 rounded-3xl flex items-center gap-5 uppercase'>read more
                            <div className='rounded h-2 w-2 bg-white'></div>
                        </button>
                    </div>
                </div>
                <div className='bg-[url(../images/OurApproach.png)] bg-cover bg-center grayscale-[1] h-[33vw] w-[48vw] rounded-2xl hover:grayscale-[0] transition-all duration-[0.7s]'></div>
            </div>
        </div>
    );
}

export default About;
