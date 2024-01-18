import React from 'react'
import video from '../assets/Teaser _ Startup India Innovation Summit 2023.mp4'
function BuildIndia2023() {
  return (
    <div className="flex flex-col my-10">
           
      <div className="font-extrabold text-center text-xl ">
            Startup India Programme
        </div>

        <div className="font-normal text-sm w-4/5 mx-auto text-justify my-10">
            Startup India is a flagship initiative launched by the Government of India on 16th January, 2016 to build a strong eco-system for nurturing innovation and startups in the country which will drive economic growth and generate large scale employment opportunities.  The Government through this initiative aims to empower startups to grow through innovation and design.   The Standup India scheme was launched on 5th April, 2016 to facilitate bank loans from Scheduled Commercial Banks (SCBs) between Rs.10 lakh to Rs.1 Crore to at least one Scheduled Caste (SC) or Scheduled Tribe (ST) and one woman per bank branch for setting up a greenfield enterprise in trading, services or manufacturing sector.  The scheme is expected to benefit at least 2.5 lakh borrowers.
            <br/>
            Each enterprise will provide jobs depending on the nature of its operation.
            <br/>
            The salient features of Startup India are as follows:
        </div>
        <div className="flex my-10 h-[60vh] w-full item-center justify-center">
            <video className=" w-auto" muted  preload="metadata"  src={video}  autoplay></video>
        </div> 
            
    </div>
  )
}

export default BuildIndia2023