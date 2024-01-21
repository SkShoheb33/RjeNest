import React from 'react'
import { Link } from 'react-router-dom'
function ExploreCarrier() {
  return (
    <div className="flex items-center mb-6 justify-center flex-col w-full">
            <div  className="text-xl md:text-2xl my-2 md:my-6 font-bold ">
                Career
            </div>
            <div data-aos="zoom-in" className="flex h-[45vh] w-full   mx-auto bg-[url('https://fitt-iitd.in/web/assets/images/Careers.webp')] bg-no-repeat bg-center bg-contain">
            </div>
            <div className="text-xl md:text-2xl my-6  ">
                Find Opportunities right for you
            </div>
            <Link to="carriers"  className="text-center w-[250px] md:w-[350px] p-2 my-1 blue-gradient rounded-lg text-white no-underline hover:font-bold">
                Explore Careers
            </Link>
    </div>
  )
}
// 
// data-aos="fade-right"
// data-aos="fade-left"
// data-aos-easing="linear" data-aos-duration="1500" 
// data-aos-easing="linear" data-aos-duration="1500" 
// data-aos-easing="linear" data-aos-duration="1500" 
export default ExploreCarrier