import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
function Event(props) {
  useEffect(()=>{
    Aos.init();
  },[]);
  return (
    <div data-aos="zoom-in-right" data-aos-duration="1200" className="card hover:cursor-pointer my-2 flex flex-col w-full md:w-1/3 justify-around">
        <div className='flex justify-center p-3 items-center'>
          <img src={props.event.img} alt={props.event.img} className='w-1/3'/>
        </div>
        <div className="text-sm md:text-sm md:my-2 p-3">
            <div className="font-bold text-lg md:my-1 text-[#001F59]">{props.event.name}
                <span>| {props.event.topics}</span>
            </div>
            <div className="font-semibold my-2">ISTE
                <span>| {props.event.mode}</span>
            </div>
            <div className="font-light">
            {props.event.desc}
            </div>
            <button className="viewbtn text-white justify-center w-1/3 py-1 rounded-lg blue-gradient font-bold mt-4 flex ">Read more</button>
        </div>
    </div>
  )
}

export default Event