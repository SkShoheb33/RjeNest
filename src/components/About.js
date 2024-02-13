import React from 'react'
import img1 from '../assets/about/img1.jpg'
import img4 from '../assets/about/img4.jpg'
import img3 from '../assets/about/img3.jpg'
function About() {
  let imgs = [img1,img4,img3];
  return (
    <div className='flex flex-col items-center mt-6 my-6 md:mb-12 w-full'>
      <div className='text-md md:text-4xl font-bold text-center w-full  my-4'>
        About RJ E-Nest
      </div>
      <div className='flex flex-col w-full items-center md:items-stretch md:flex-row justify-center gap-6'>
        {
          imgs.map((img,index)=>
          <div key={index} className='flex gap-4 flex-col w-4/5 md:w-1/5 p-2 card'>
              <img className='aspect-auto' src={img} alt='img'/>
              <div className='text-center p-2'>For development of Technology and Science  based prototype/products- a min <span className='font-bold'> Rs. 2.00 lakhs </span> to max. upto
                <span className='font-bold'> Rs.10 lakhs</span> can be supported with ignition grant      Applicants can be individual innovators or early-stage
                startups.
            </div>
        </div>)
        }
        
        
      </div>
    </div>
  )
}

export default About