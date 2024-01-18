import React from 'react'
import img1 from '../assets/Partners/p1.webp'
import img2 from '../assets/Partners/p2.jpeg'
import img3 from '../assets/Partners/p3.jpg'
import img4 from '../assets/Partners/p4.png'
import img5 from '../assets/Partners/p5.png'
import img6 from '../assets/Partners/p6.png'
function HomePartners() {
    let imgs = [img1,img2,img3,img4,img5,img6]
  return (
    <div className='flex flex-col items-center'>
        <div className='md:text-2xl text-xl my-4 font-bold'>Partners</div>
            <div className='flex w-5/6 gap-2'>
                {imgs.map((img,index)=>
                    <img className='w-1/6 shadow ' src={img} alt={img} key={index}/>
                )}
            </div>
    </div>
  )
}

export default HomePartners