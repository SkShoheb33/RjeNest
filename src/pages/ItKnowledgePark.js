import React from 'react'
import img1 from '../assets/itKowledgePark/img1.png'
import img2 from '../assets/itKowledgePark/img2.png'
import img3 from '../assets/itKowledgePark/img3.png'
import img4 from '../assets/itKowledgePark/img4.png'
import img5 from '../assets/itKowledgePark/img5.png'
import img6 from '../assets/itKowledgePark/img6.png'
import img7 from '../assets/itKowledgePark/img7.png'
import img8 from '../assets/itKowledgePark/img8.png'
import PhotoSlider from '../components/PhotoSlider'
function ItKnowledgePark() {
  let img = [img1,img2,img3,img4,img5,img6,img7,img8];
  return (
    <div className="flex leading-10 flex-col w-full md:w-2/3 px-2 mx-auto">
            <div className="md:text-xl text-2xl font-extrabold my-4 text-center">IT KNOWLEDGE PARK-INCUBATION CENTRE</div>

            <div className="text-xl my-2 text-center font-semibold">Department of Information Technology</div>
            <div className="text-normal text-sm md:text-md mt-3 md:mt-5 text-justify">
                The incubation centre of IT looks forward and encourage participation of students and
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
            <div className="text-4xl my-2 text-center font-bold">Gallary</div>
            <div className=" w-auto gap-5 flex justify-center items-center">
                <PhotoSlider imgs={img}/>                
            </div>
            
        </div>
  )
}

export default ItKnowledgePark