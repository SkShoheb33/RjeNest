import React from 'react'
import img1 from '../assets/about/img1.jpg'
import img4 from '../assets/about/img4.jpg'
import img3 from '../assets/about/img3.jpg'
function About() {
  let imgs = [img1,img4,img3];
  return (
    <div className='flex flex-col my-6 w-[100%]'>
      <div className='text-md md:text-4xl font-bold text-center my-4'>
        About RJ E-Nest
      </div>
      <div className='flex justify-center gap-6'>
        {
          imgs.map((img,index)=>
          <div className='flex gap-4 flex-col w-1/5 p-2 card'>
              <img className='aspect-auto' src={img} alt='img'/>
              <div className=''>For development of Technology and Science  based prototype/products- a min Rs. 2.00 lakhs to max. upto
                Rs.10 lakhs can be supported with ignition grant      Applicants can be individual innovators or early-stage
                startups.
            </div>
        </div>)
        }
        
        
      </div>
    </div>
  )
}

export default About