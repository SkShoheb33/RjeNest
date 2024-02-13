import React from 'react'
import Event from './Event';
import img1 from '../assets/events-logos/ieee.png'
import img2 from '../assets/events-logos/acm.jpeg'
import img3 from '../assets/events-logos/iste.png'
function Events() {
    let events = [
        {name:'Webthon',topics:'HTML & CSS',organisation:'ISTE',mode:'Offline',time:'11:00 AM',venue:'Cyber block',desc:'This Webathon is conducted by IOT department in E-Learning.',img:img1},
        {name:'Webthon',topics:'HTML & CSS',organisation:'ISTE',mode:'Offline',time:'11:00 AM',venue:'Cyber block',desc:'This Webathon is conducted by IOT department in E-Learning.',img:img3},
        {name:'Webthon',topics:'HTML & CSS',organisation:'ISTE',mode:'Offline',time:'11:00 AM',venue:'Cyber block',desc:'This Webathon is conducted by IOT department in E-Learning.',img:img2}
    ]

  return (
    <div className="flex flex-col items-center p-6 ">
            <div className=" text-xl md:text-2xl font-bold">Events</div>
            <div className="flex w-4/5 gap-2 flex-col md:flex-row">
                {events.map((event,index)=><Event key={index} event = {event}/>)}
            </div>
            <div className="flex blue-gradient viewbtn hover:cursor-pointer md:my-7 px-2 py-1 text-white rounded-md">View all</div>
    </div>
  )
}

export default Events