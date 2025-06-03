import React from 'react'

const Service = () => {
  return (
    <div className='h-full w-full '>
        <div className='flex px-10 pb-20'>
            <img  className='h-120 w-full z-250 mt-30 ' src="serv5.png" alt="" />
        </div>

        <div className=' charts p-15 '>
           <div className='flex justify-evenly gap-10 pb-15'>
              <div className='flex gap-5'>
                <img className='h-65' src="serv1.webp" alt="" />
                <div className="cont h-full">
                    <h3 className='text-[4vw] pt-10 leading-[1.2] font-semibold'>Symptom-Based <br /> Diagnosis</h3>
                    <h4 className='text-[2.5vw] pt-10 leading-[1.2] font-normal'>Input your symptoms, get <br /> an instant Ayurvedic-AI analysis.</h4>
                </div>
              </div>
              <div className='flex gap-5'>
                <img className='h-65' src="serv2.webp" alt="" />
                <div className="cont h-full">
                    <h3 className='text-[4vw] pt-10 leading-[1.2] font-semibold'>Herbal<br /> Remedy <br />Curation</h3>
                    <h4 className='text-[2.5vw] pt-10 leading-[1.2] font-normal'>Custon herbal blends <br />for your constitution <br />& imbalances.</h4>
                </div>
              </div>
            </div>

            <div className='flex justify-evenly gap-10'>
              <div className='flex gap-5'>
                <img className='h-65' src="serv3.webp" alt="" />
                <div className="cont h-full">
                    <h3 className='text-[4vw] pt-10 leading-[1.2] font-semibold'>Lifestyle & Diet<br />Planning</h3>
                    <h4 className='text-[2.5vw] pt-10 leading-[1.2] font-normal'>Input your symptoms, get <br /> an instant Ayurvedic-AI analysis.</h4>
                </div>
              </div>
              <div className='flex gap-5'>
                <img className='h-70' src="serv4.webp" alt="" />
                <div className="cont h-full">
                    <h3 className='text-[4vw] pt-10 leading-[1.2] font-semibold'> Product <br />Subscription</h3>
                    <h4 className='text-[2.5vw] pt-10 leading-[1.2] font-normal'>Custon herbal blends <br />for your constitution <br />& imbalances.</h4>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Service