import React from 'react'

function Event(props) {
  return (
    <div data-aos="zoom-in-right" data-aos-duration="1200" className="card hover:cursor-pointer my-2 flex flex-col w-full md:w-1/3">
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
            <button className="viewbtn text-white justify-center w-1/3 py-1 rounded-sm bg-[#001f59] font-bold mt-4 flex ">Read more</button>
        </div>
    </div>
  )
}

export default Event