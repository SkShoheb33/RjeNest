import React from 'react'
import img1 from '../assets/falcon/img1.png'
import img2 from '../assets/falcon/img2.png'
import img3 from '../assets/falcon/img3.png'
import img4 from '../assets/falcon/img4.png'
import img5 from '../assets/falcon/img5.png'
import img6 from '../assets/falcon/img6.png'
import img7 from '../assets/falcon/img7.png'
import img8 from '../assets/falcon/img8.png'
import img9 from '../assets/falcon/img9.png'
function Falcon() {
  let img = [img1,img2,img3,img4,img5,img6,img7,img8,img9];
  return (
    <div className="flex leading-10 flex-col w-full md:w-2/3 px-2 mx-auto">
            <div className="md:text-xl text-2xl font-extrabold my-4 text-center">FALCON INCUBATION CENTRE -INCUBATION CENTRE </div>

            <div className="text-lg my-2 text-center font-semibold">Department of Mechanical Engineering</div>
            <div className="text-normal text-sm md:text-md text-justify mt-3 md:mt-5">
                Falcon Incubation Centre (Innovation, incubation and start up) at
RVR&JCCE has been established to promote entrepreneurship among
students of formal and non formal courses. The Cell fosters innovation,
research, and entrepreneurial activities in technology-based areas. The cell
motivates and promotes scientific temper among the students and provides
a platform to incubate their innovative ideas into commercially viable
products.
            </div>
            <div className="text-normal text-sm md:text-md text-justify">Facilities and functionalities of centre:</div>

            <ol className="list-decimal text-sm md:text-md list-inside text-normal my-2 " >
                <li className="">3D- printer Flash Forge dreamer (DRM1).</li>
                <li className="">Tensile testing machine.</li>
                <li className="">Tubular Furnace</li>
                <li className="">Bottom pouring stir casting furnace.</li>
                <li className="">Wear and friction monitor.</li>
                <li className="">Micro Vickers Hardness Tester(VHN).</li>
                <li className="">Inverted Metallurgical Microscope.</li>
                <li className="">Planetary Ball Mill.</li>
                <li className="">Evaluation and optimization of process parameters for agitation in concrete mixing.</li>
            </ol>
            <div className="text-4xl my-2 text-center font-bold">Gallary</div>
            <div className="grid grid-cols-2 w-full gap-5 my-4">
            {img.map((i,index)=>{return (
              <div key={index} className="flex w-2/3 border-2 mx-auto">
                  <img src={i} alt=""/>
              </div>
            )})}
                
            </div>
            
        </div>
  )
}

export default Falcon