import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

function VisionMission() {
    useEffect(()=>{
        Aos.init();
    },[]);
  return (
    <div className="overflow-hidden flex blue-gradient gap-6  md:gap-9 p-12 md:pb-15 w-full flex-col text-white items-center justify-center">
        <div className='w-full flex justify-start md:justify-center gap-8 md:gap-8 md:w-3/4 flex-col md:flex-row'>
            <div className='md:w-1/3'>
                <div className='md:text-right text-lg md:text-3xl font-bold '>Vision</div>
                <div className='md:text-right text-sm md:text-lg' data-aos="fade-right">To Empower Entrepreneurship at RVRJCCE.</div>
            </div>
            <div className='md:w-1/3'>
                <div className='md:text-left text-lg md:text-3xl font-bold'>Mission</div>
                <div className='md:text-left text-sm md:text-lg' data-aos="fade-left">To inculcate the spirit of entrepreneurship among young minds.</div>
            </div>
        </div>
        <div className='md:w-1/2'>
            <div className='md:text-center text-lg md:text-3xl font-bold'>What we do?</div>
            <div className='md:text-center text-sm md:text-lg' data-aos="fade-up">We make the entrepreneurial world accessible to all group of people part of the RVRJCCE ecosystem, cater the audience from startup enthusiast to hard entrepreneurs, with plethora of yearlong events and workshops through both personal and collaboration-based approach.</div>
        </div>
            
    </div>
  )
}

export default VisionMission