import React from 'react'

const Footer = () => {
  return (
    <div className='mt-40 h-full w-full bg-[linear-gradient(to_bottom,black,#3F6030)] px-15 py-7 rounded-t-3xl flex justify-between text-white'>
        <div className='w-1/2 h-full flex flex-col justify-between '>
            <div className='text-[6.7vw] font-[Roboto] font-black scale-x-85 scale-y-120 origin-left tracking-tighter leading-[5.4vw] uppercase pt-25 pb-15'>
                <h1>Eye-</h1>
                <h1>Opening</h1>
            </div>
            
            <div className='mt-25'>
                <h1 className='special text-3xl font-extrabold'>MADE IN LOVE WITH🌱</h1>
            </div>
        </div>

        <div className='w-1/2 h-full'>
            <div className='text-[6.7vw] font-[Roboto] font-black scale-x-85 scale-y-120 origin-left tracking-tighter leading-[5.4vw]  pt-25'>
                <h1>AYURVERDAZz</h1>
            </div>

            <div className='flex justify-between'>
                <div>
                    <div className='pt-15 font-["Montserrat"]'>
                        <h4 className='font-["Montserrat"] pb-5'>S:</h4>
                        <a href="#" className='block underline '>Instagram</a>
                        <a href="#" className='block underline '>Behance</a>
                        <a href="#" className='block underline '>Linkedin</a>
                        <a href="#" className='block underline '>Facebook</a>
                    </div>
                    <div className='pt-15 font-["Montserrat"]'>
                        <h4 className='font-["Montserrat"] pb-5'>L:</h4>
                        <h4 className='block underline cursor-pointer'>202-1965 W 4th Ave <br />Vancouver, Canada</h4>
                    </div>
                    <div className='pt-15 font-["Montserrat"]'>
                        <h4 className='font-["Montserrat"] pb-5'>E:</h4>
                        <a href="#" className='block underline '>hello@ochi.design</a>
                    </div>
                </div>

                <div className='pt-50 font-["Montserrat"] pr-10'>
                    <h4 className='font-["Montserrat"] pb-5'>M:</h4>
                    <a href="#" className='block underline '>Home</a>
                    <a href="#" className='block underline '>Service</a>
                    <a href="#" className='block underline '>Our work</a>
                    <a href="#" className='block underline '>About us</a>
                    <a href="#" className='block underline '>Insights</a>
                    <a href="#" className='block underline '>Connect us</a>
                </div>
            </div>    
        </div>
    </div>

  )
}

export default Footer