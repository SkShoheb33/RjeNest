import React from 'react'
import img1 from '../assets/rjenest/image1.jpg'
import img2 from '../assets/rjenest/image2.jpg'
import img3 from '../assets/rjenest/image3.jpg'
import img4 from '../assets/rjenest/image4.jpg'
import img5 from '../assets/rjenest/image5.jpg'
import img6 from '../assets/rjenest/image6.jpg'
import img7 from '../assets/rjenest/image7.jpg'
import img8 from '../assets/rjenest/image8.jpg'
function RjenestIncubation() {
  let images = [img1,img2,img3,img4,img5,img6,img7,img8]
  return (
    <div className='md:p-8 my-6 flex p-2 md:w-2/3 mx-auto flex-col justify-center items-center gap-2'>
      <div className='font-extrabold text-xl'>R.V.R & J.C Enterprice Nest</div>
      <div className='text-justify text-sm'>RJNEST envisions the creation of an all-encompassing and empowering resource platform for emerging entrepreneurs across diverse realms of science and technology. Its mission is to elevate and intensify the incubation endeavors and knowledge-driven entrepreneurial initiatives at UoH, fostering the development of a dynamic entrepreneurial ecosystem on the campus. Presently, RJNEST oversees the operations of three cutting-edge incubation centers (ICs) – RJNEST-Bio NEST, RJNEST-TBI, and RJNEST-TIDE. These ICs extend incubation support in the domains of Life Sciences, Pharma & Chemistry, as well as Materials, IT & Electronics, respectively. The TBI was established with robust backing from DST, TIDE receives support from DietY, and BioNEST was instituted with generous support from BIRAC/DBT. Boasting state-of-the-art infrastructure and essential instrumentation, these ICs collectively span an impressive 50,000 sqft, featuring exceptional facilities and plug-and-play, cutting-edge lab suites. Since inception, the ICs have been instrumental in nurturing over 80 start-ups, aiding them in transforming their conceptualizations into innovative technologies. </div>
      <div className="text-4xl my-2 text-center font-bold">Gallery</div>
      <div className="grid grid-cols-2 w-full gap-5 my-4">
        {images.map((img,index)=>{
          return (
              <div key={index} className="flex w-3/4 md:w-2/3 border-2 mx-auto">
                  <img src={img} alt=""/>
              </div>
          )
      })}
      </div>
    </div>
  )
}

export default RjenestIncubation