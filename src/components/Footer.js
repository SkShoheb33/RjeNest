import React from 'react'
import { faLink,faLocationCrosshairs,faEnvelope,faPhone} from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faInstagram, faLinkedin, faXTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Footer() {
  return (
    <div className='black-gradient text-white flex flex-col items-center py-8'>
        <div className='flex md:flex-row flex-col w-full px-5 md:w-3/4'>
            <div className='hidden md:block w-full md:w-1/3 logo '></div>
            <div className='w-full md:w-1/3 flex gap-3 flex-col'>
                <div className='text-gray-500 text-xl'>Useful links</div>
                <div className='flex flex-col gap-2'>
                    <div className='hover:text-[#4c78cb] w-fit'><a className='no-underline text-white' href='https://rvrjcce.ac.in/researchActivities.php?menu=col'><FontAwesomeIcon className='mx-2' icon={faLink} />Reseach activities</a></div>
                    <div className='hover:text-[#4c78cb] w-fit'><a className='no-underline text-white' href='https://rvrjcce.ac.in/photogallery.php'><FontAwesomeIcon className='mx-2' icon={faLink} />Photo Galary</a></div>
                    <div className='hover:text-[#4c78cb] w-fit'><a className='no-underline text-white' href='https://rvrjcce.ac.in/'><FontAwesomeIcon className='mx-2' icon={faLink} />College website</a></div>
                    <div className='hover:text-[#4c78cb] w-fit'><a className='no-underline text-white' href='https://rvrjcce.ac.in/iitb_about.php?menu=iitb'><FontAwesomeIcon className='mx-2' icon={faLink} />About</a></div>
                    <div className='hover:text-[#4c78cb] w-fit'><a className='no-underline text-white' href='https://rvrjcce.ac.in/newsletter-committee.php'><FontAwesomeIcon className='mx-2' icon={faLink} />News</a></div>
                </div>
            </div>
            <div className='w-full md:w-1/3 flex gap-3 flex-col'>
                <div className='text-gray-500 text-xl'>Contact us</div>
                <div className='flex flex-col gap-2'>
                    <div className='flex  items-center'><FontAwesomeIcon className='mx-2 text-red-500' icon={faLocationCrosshairs} /><div>RVR JC College of engineering Chowdavaram</div></div>
                    <div className='flex  items-center'><FontAwesomeIcon className='mx-2 text-amber-400' icon={faEnvelope} /><div>rvrjc@gmail.com</div></div>
                    <div className='flex  items-center'><FontAwesomeIcon className='mx-2 text-green-500' icon={faPhone} /><div>+91 9876543210</div></div>
                </div>
            </div>
        </div>
        <div className='flex md:w-1/2 mt-6 justify-center'>
            <div className='w-1/6 items-center justify-center flex p-2 '><a className='no-underline text-blue-500' href='https://www.facebook.com/rvrjcce.official/'><FontAwesomeIcon className='text-2xl hover:transform hover:scale-120 hover:cursor-pointer rounded-full p-2 hover:bg-gray-600' icon={faFacebook} /></a></div>
            <div className='w-1/6 items-center justify-center flex p-2 text-blue-600'><a className='no-underline text-blue-600' href='https://www.linkedin.com/school/r.v.r.-&-j.c.-college-of-engineering/'><FontAwesomeIcon className='text-2xl hover:transform hover:scale-120 hover:cursor-pointer rounded-full p-2 hover:bg-gray-600' icon={faLinkedin} /></a></div>
            <div className='w-1/6 items-center justify-center flex p-2 '><a className='no-underline text-white' href='https://twitter.com/rvrjc_official'><FontAwesomeIcon className='text-2xl hover:transform hover:scale-120 hover:cursor-pointer rounded-full p-2 hover:bg-gray-600' icon={faXTwitter} /></a></div>
            <div className='w-1/6 items-center justify-center flex p-2 text-pink-500'><a className='no-underline text-pink-500' href='https://www.instagram.com/rvrjcce.official/'><FontAwesomeIcon className='text-2xl hover:transform hover:scale-120 hover:cursor-pointer rounded-full p-2 hover:bg-gray-600' icon={faInstagram} /></a></div>
            <div className='w-1/6 items-center justify-center flex p-2 text-red-500'><a className='no-underline text-red-500' href='https://www.youtube.com/c/RVRJCCollegeofEngineering'><FontAwesomeIcon className='text-2xl hover:transform hover:scale-120 hover:cursor-pointer rounded-full p-2 hover:bg-gray-600' icon={faYoutube} /></a></div>
        </div>
        <div className=''>Copyrights reserved ©2024 </div>
    </div>
  )
}

export default Footer