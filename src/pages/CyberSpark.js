import React from 'react'   
import img1 from '../assets/cyberSpark/img1.jpg'
import img2 from '../assets/cyberSpark/img2.jpg'
import img3 from '../assets/cyberSpark/img3.jpg'
import img4 from '../assets/cyberSpark/img4.jpg'
export default function CyberSpark() {
    let img = [img1,img2,img3,img4]
  return (
    <div className="flex leading-10 flex-col w-full md:w-2/3 px-2 mx-auto">
            <div className=" md:text-2xl text-xl font-extrabold my-4 text-center ">CYBER SPARK-INCUBATION CENTRE</div>

            <div className="text-xl md:text-xl my-2 text-center font-semibold">Department of Computer Science and Engineering</div>
            <div className=" text-normal text-sm md:text-md text-justify mt-3 md:mt-5">
                The incubation centre of CSE looks forward and encourage participation of students and
support the ideas and help them to promote ideas into operative action plans. We help them
during the process, and provide them with the required support.
            </div>
            <div className="text-normal text-sm md:text-md text-justify">Facilities and functionalities of centre:</div>

            <ol className="list-decimal text-sm md:text-md list-inside text-normal my-2 " >
                <li className="">Associate with mentors by conducting workshops, seminars and interactive sessions regarding entrepreneurship and innovation.</li>
                <li className="">Connect with successful alumni who turned entrepreneurs and who are successful in start-ups.</li>
                <li className="">Get opportunities to work on live projects with the help of industry</li>
                <li className="">Connect with successful students- turned- entrepreneurs.</li>
                <li className="">Recurrentcollaborationwith industry professionals and entrepreneurs.</li>
                <li className="">Advanced infrastructure with work stations, discussion rooms.</li>
                <li className="">Ready-to-use internet bandwidth.</li>
                <li className="">Standby DG power system.</li>
                <li className="">Uninterrupted power supply system.</li>
            </ol>
            <div className="text-4xl my-2 text-center font-bold">Gallery</div>
            <div className="grid grid-cols-2 w-full gap-5 my-4">
                {img.map((i,index)=>{
                    return (
                        <div key={index} className="flex w-2/3 border-2 mx-auto">
                            <img src={i} alt=""/>
                        </div>
                    )
                })}
                
                
            </div>
            
        </div>
  )
}
