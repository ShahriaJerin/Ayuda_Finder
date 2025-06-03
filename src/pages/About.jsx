import { useRef, useState, useLayoutEffect } from 'react';
import gsap from 'gsap';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


const About = () => {
  let[showContent,setShowContent] = useState(false);

useLayoutEffect(() => {
  const tl = gsap.timeline();

  tl.to(".vi-mask-group", {
    rotate: 10,
    duration: 4,
    ease: "power4.inOut",
    transformOrigin: "50% 50%",
  }).to(".vi-mask-group", {
    scale: 10,
    duration: 2,
    delay: -1.8,
    ease: "expo.easeInOut",
    transformOrigin: "50% 50%",
    opacity: 0,
    onUpdate: function () {
      if (this.progress() >= 0.9) {
        document.querySelector(".svg")?.remove();
        setShowContent(true);
        this.kill();
      }
    },
  });
}, []);


useLayoutEffect(() => {
  if (!showContent) return;

  const main = document.querySelector(".main");
  if (!main) return;

  const handleMove = (e) => {
    const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
    gsap.to(".main .text", { x: `${xMove * 0.4}%` });
    gsap.to(".sky", { x: xMove });
    gsap.to(".bg", { x: xMove * 1.7 });
  };

  main.addEventListener("mousemove", handleMove);

  return () => main.removeEventListener("mousemove", handleMove);
}, [showContent]);



  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#18181B]">
        
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="100"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily=""
                >
                  About Ayuda
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./ayu.webp"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && <div className='main w-full'>
        <div className='landing h-screen w-full'>
          <Navbar/>

            <div className='imgDiv relative h-screen w-full overflow-hidden'>
                <img className=' sky object-cover w-full h-full absolute top-0 left-0 scale-[1]' src="./ayu.webp" alt="" />
                <img className='bg object-cover w-full h-full absolute top-0 left-0 scale-[1.1]' src="./le.webp" alt="" />
                <div className="text text-white flex flex-col absolute left-230 -translate-x-1/2 pt-10">
                    <h1 className="text-[9rem] leading-none -ml-110 text-white shadow-blackish">Ayuda</h1>
                    <h1 className='text-[9rem] leading-none -ml-80 shadow-blackish'>Health</h1>
                </div>
                <img  className='absolute -bottom-[28%] left-1/2 -translate-x-1/2 scale-[.8]' src="./tab.webp" alt="" />
            </div>

            <div className="btmbar text-white absolute bottom-0 left-0 w-full px-10 py-15 bg-gradient-to-t from-[black] to-transparent">
                <div className='gap-3 flex items-center relative top-10'>
                    <i className ="text-4xl ri-arrow-down-line"></i>
                    <h3 className='text-xl font-medium font-[Montserrat]'>Scroll down</h3>
                </div> 
            </div>
        
        </div>

        <div className=" h-[57vw] w-full bg[#18181B]  flex items-center justify-center mt-50">
            <div className="cntr w-full h-screen flex text-white ">
                <div className="limg w-1/2 f-full relative pt-10 ">
                    <img className='absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[.6]' src="./pixi.webp" alt="" />
                </div>
                <div className="rg w-[43%]">
                    <h1 className='text-8xl'>Heal & Align,</h1>
                    <h1 className='text-8xl'>Divine Living</h1>
                    <p className='font-[Montserrat] pt-10 pr-10 text-[2.2vh]'>Welcome to <strong>Ayudadinder — where ancient wisdom meets conscious care.</strong></p>
                    <p className='font-[Montserrat] pt-10 pr-10 text-[2.2vh]'>AyudaFinder is your trusted digital companion for personalized Ayurvedic medicine suggestions, combining ancient wisdom with modern convenience. Whether you're exploring natural remedies or seeking holistic support for common ailments, AyudaFinder helps you find the most suitable Ayurvedic solutions tailored to your needs.</p>
                    <p className='font-[Montserrat] pt-10 pr-10 text-[2.2vh]'>We focus on delivering accurate, ethical, and user-friendly guidance by integrating essential Ayurvedic knowledge with intelligent suggestions. Our mission is to empower users with accessible and effective wellness options while honoring the time-tested traditions of Ayurveda.</p>

                    <button className="px-4 py-2 bg-white text-[#18181B] text-2xl mt-16 rounded transition duration-300 hover:shadow-glow">Consult Now</button>
                </div>
            </div>  
        </div>

        <div className=" h-[57vw] w-full bg[#18181B] flex items-center justify-center mt-10">
            <div className="cntr w-full h-screen flex text-white pl-40 ">
                <div className="rg w-[43%] mt-25">
                    <h1 className='text-8xl'>About Us</h1>
                    <p className='font-[Montserrat] pt-10 pr-10 text-[2.2vh]'><strong>At AyudaFinder ,</strong>  we are dedicated to bridging the gap between ancient Ayurvedic wisdom and modern digital convenience. Our platform offers intelligent, personalized Ayurveda medicine suggestions to help users find natural and effective remedies for a wide range of health concerns.</p>
                   <p className='font-[Montserrat] pt-10 pr-10 text-[2.2vh]'>We believe that wellness should be simple, informed, and in harmony with nature. That’s why our team is committed to creating a user-friendly experience that makes traditional healing easy to explore and understand.</p>
                    <p className='font-[Montserrat] pt-10 pr-10 text-[2.2vh]'><strong>AyudaFinder is more than just a suggestion tool </strong> —it's your companion in the journey toward balanced, natural health.</p>
                </div>
                <div className="limg w-1/2 f-full relative pt-10 ">
                    <img className='absolute top-1/2 -bottom-2  left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[.6]' src="./pixi2.webp" alt="" />
                    <div className="btmbar text-white absolute -bottom-22 left-0 w-full px-20 py-35 bg-gradient-to-t from-[black] to-transparent"></div>
                </div>
                
            </div>
              
        </div>
         
      </div> }
      <Footer/>
    </>
  )
}

export default About