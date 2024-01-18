import React from 'react'
import Event from './Event';
function Events() {
    let events = [
        {name:'Webthon',topics:'HTML & CSS',organisation:'ISTE',mode:'Offline',time:'11:00 AM',venue:'Cyber block',desc:'This Webathon is conducted by IOT department in E-Learning.'},
        {name:'Webthon',topics:'HTML & CSS',organisation:'ISTE',mode:'Offline',time:'11:00 AM',venue:'Cyber block',desc:'This Webathon is conducted by IOT department in E-Learning.'},
        {name:'Webthon',topics:'HTML & CSS',organisation:'ISTE',mode:'Offline',time:'11:00 AM',venue:'Cyber block',desc:'This Webathon is conducted by IOT department in E-Learning.'}
    ]
  return (
    <div className="flex flex-col items-center p-6 ">
            <div className=" text-xl md:text-2xl font-bold">Events</div>
            <div className="flex w-4/5 gap-2 flex-col md:flex-row">
                {events.map((event,index)=><Event key={index} event = {event}/>)}
            </div>
            <div className="flex bg-[#001f59] viewbtn hover:cursor-pointer md:my-7 p-2 text-white rounded-sm">View all</div>
    </div>
  )
}

export default Events