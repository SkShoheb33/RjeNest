import { faNewspaper,faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Aos from 'aos'
import 'aos/dist/aos.css'
import earth from '../assets/news/news.png'
import React, { useEffect } from 'react'

function News() {
    useEffect(()=>{
        Aos.init();
    },[])
    let news = [
        "Hacktons are conducting by ISTC organisation in cyber block.",
        "Webthons are conducting by the Information of technology department in e-learning lab at 2:30pm.",
        "All the students come to OAT at 3pm to attend the meeting.",
        "All the students who have intrest in coding can particiapate the codethon in HT block."
    ]
  return (
    <div className="flex flex-col blue-gradient w-full  gap-6 text-white p-8 md:p-12">
        <div className='text-center text-2xl font-bold'>
            News Board
        </div>
        <div className='flex justify-between items-center'>
            <div className='flex flex-col w-full  md:w-2/3 gap-4 text-md'>
                {
                    news.map((n,index)=>
                    <div data-aos="fade-right" key={index} className='flex font-lg border-b  p-2 w-full justify-between'>
                        <div className='flex gap-2 items-center w-full '>
                            <FontAwesomeIcon  icon={faNewspaper} />
                            <div className=''>{n}</div>
                        </div>
                        <FontAwesomeIcon className='' icon={faArrowRight} />
                    </div>
                    )
                }            
            </div>
            <img src={earth} className='hidden md:block md:w-1/5' alt=''/>
        </div>
        
    </div>
  )
}

export default News