import React from 'react';

const Cards = () => {
    return (
        <div className="w-full mb-30 bg-zinc-900 flex gap-5 px-20">
            <div className='w-1/2 h-[50vh] flex'>
                <div className='card w-full relative rounded-xl h-full bg-[#004D43] flex items-center justify-center'>
                    <h1 className="rubik-dirt text-[4vw] mb-5 font-extrabold">AYUDA</h1>
                </div>
            </div>
            <div className='w-1/2 h-[50vh] flex gap-5'>
                <div className='card w-full rounded-xl h-full bg-[#2b3130ad]'>
                    <div className='flex items-center justify-center flex-col mt-[9vw]'>
                        <h1 className="rubik-dirt text-[3vw] mb-10 font-extrabold">therepy</h1>
                        <h1 className='text-xs -mt-[3vw]'>⭐⭐⭐⭐⭐</h1>
                    </div>
                </div>
                <div className='card w-full rounded-xl h-full bg-[#222422dd] flex items-center justify-center'>
                    <img src="../images/logo_Ayuda.png" alt="" className='h-[10vw] w-[14vw] mb-[2vw]'/>
                </div>
            </div>
        </div>
    );
}

export default Cards;
