import React,{useEffect} from 'react'
import coWorking from '../assets/adds/Co-working Space.png'
import financial from '../assets/adds/Financial Aid.png'
import ipSupport from '../assets/adds/Ip support.png'
import mentorship from '../assets/adds/Mentorship.png'
import networking from '../assets/adds/Networking Events.png'
import software from '../assets/adds/Software Tools.png'
import technology from '../assets/adds/Technological Infrastructure.png'
import marker from '../assets/adds/Maker Lab.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
function AddValues() {
    useEffect(()=>{
        Aos.init();
    },[]);
    let data = [
        {image:coWorking,text:"Co Working Space"},
        {image:financial,text:"Financial Aid"},
        {image:ipSupport,text:"IP Support"},
        {image:mentorship,text:"Mentorship"},
        {image:networking,text:"Networking Events"},
        {image:software,text:"Software Tools"},
        {image:technology,text:"Technological Infrastructure"},
        {image:marker,text:"Maker Lab"},
    ]
  return (
    <div className="flex flex-col p-8 items-center gap-6 w-full ">
        <div className='text-2xl font-bold'>
            How Rj E-Nest Adds Value
        </div>
        <div className='flex flex-wrap gap-2 justify-center '>
            {
                data.map((d,index)=>
                    <div key={index} className='w-1/3 md:w-1/5 flex  justify-center flex-col items-center  m-2' data-aos="zoom-in">
                        <img src={d.image} className='w-1/3 ' alt={d.text}/>
                        <div className='text-center text-md my-2'>{d.text}</div>
                    </div>
                )
            } 
        </div>
    </div>
  )
}

export default AddValues