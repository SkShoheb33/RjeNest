import React from 'react'
import img1 from '../assets/Partners/p1.webp'
import img2 from '../assets/Partners/p2.jpeg'
import img3 from '../assets/Partners/p3.jpg'
import img4 from '../assets/Partners/p4.png'
import img5 from '../assets/Partners/p5.png'
import img6 from '../assets/Partners/p6.png'
function Partners() {
    let img = [img1,img2,img3,img4,img5,img6,img2,img1]
  return (
    <div class="flex flex-col my-7 p-6 w-full items-center ">
            <div class="text-xl md:text-2xl font-extrabold">PARTNERS</div>
            <div class="text-md md:text-xl mt-6">Government</div>
            
            <div class="flex flex-row w-full md:w-3/4  flex-wrap my-8 ">
            {img.map((i,index)=>{
                return (
                    <div key={index} class="flex w-1/2 md:w-1/4 my-3 md:my-8 justify-center">
                        <img src={i} data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1000" class="w-2/3" width="180px" alt=""/>
                    </div>
                )
            })}
                

            </div>
        </div>
  )
}

export default Partners