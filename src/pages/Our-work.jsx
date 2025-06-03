import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Ours = () => {
  return (
    <div>
        <Navbar/>
        <div className='p-20 h-full w-full'>
            <div>
                <h1 className='text-[12vw] pt-19  leading-[1] font-semibold tracking-tighter '>Our Work</h1>
                <h3 className='text-[2.5vw] pt-15 leading-[1.2] font-normal'>We combine <strong>Ayurveda and AI</strong> to drive our mission through <br /> rigorous research, analysis, and product development.</h3>
                <button className="px-12 py-6 bg-[#316131] text-white text-3xl mt-16 rounded-2xl cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#3e7d3e] hover:shadow-xl active:scale-95">Read Our Stories</button>
            </div>
        </div>

        <div className='h-full w-full '>
            <div className=' charts p-15 '>
                <div className='flex justify-evenly gap-45 pb-15'>
                    <div>
                        <img className='h-115' src="work1.png" alt="" />
                        <div className="cont h-full">
                            <h3 className='text-[5vw] pt-10 leading-[1.2] font-semibold'>Innovation</h3>
                            <h4 className='text-[2vw] pt-7 leading-[1.2] font-normal'>Groundbreaking solutions <br />in e-health and wellness</h4>
                        </div>
                    </div>
                    <div className='pt-100'>
                        <img className='h-95' src="work4.png" alt="" />
                        <div className="cont h-full">
                            <h3 className='text-[5vw] pt-10 leading-[1.2] font-semibold'>Research</h3>
                            <h4 className='text-[2vw] pt-7 leading-[1.2] font-normal'>Blending Ayuda's legecy <br />with AI-driven mathodologies</h4>
                        </div>
                    </div>
                </div>

                <div className='flex justify-evenly gap-45 pb-15'>
                    <div>
                        <img className='h-130' src="work2.png" alt="" />
                        <div className="cont h-full">
                            <h3 className='text-[5vw] pt-10 leading-[1.2] font-semibold'>Delivery</h3>
                            <h4 className='text-[2vw] pt-7 leading-[1.2] font-normal'>Efficient distribution from <br />our lab to customers globally</h4>
                        </div>
                    </div>
                    <div className='pt-130'>
                        <img className='h-80' src="work3.png" alt="" />
                        <div className="cont h-full">
                            <h3 className='text-[5vw] pt-10 leading-[1.2] font-semibold'>Laboratory</h3>
                            <h4 className='text-[2vw] pt-7 leading-[1.2] font-normal'>Our In-house R&D facility <br />tests and refines our products</h4>
                        </div>
                    </div>
                </div>     

        </div>

        <Footer/>
    </div>
    </div> 
  )
}

export default Ours