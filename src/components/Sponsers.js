import React from 'react'
import img1 from '../assets/sponsers/dstnidhi.png'
import img2 from '../assets/sponsers/rvr.jpg'
import img3 from '../assets/sponsers/dst.jpg'
function Sponsers() {
let imgs = [img1,img2,img3];
  return (
    <div className='flex md:flex-row gap-3 my-4 md:my-7 justify-evenly '>
        {
            imgs.map((img,index)=>
                <div className='w-1/3 md:w-1/6 p-8 '>
                    <img key={index}  src={img}/>
                </div>
            )
        }
    </div>
  )
}

export default Sponsers
