import React from 'react'
import {faFacebook, faInstagram, faLinkedin, faXTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Contact() {
  return (
    <div className='flex flex-col-reverse  m-[10vh] md:flex-row  w-4/5 justify-center h-[80vh] items-center mx-auto'>
        <div className='flex flex-col w-full items-center md:items-start md:w-1/2 '>
            <div className='text-2xl font-extrabold mx-2'>Contact us</div>
            <div className='text-sm mx-2'>Feel free to contact us.</div>
            <div className='flex w-full md:w-1/2 '>
                <div className='w-1/6 items-center justify-center flex p-2 '><a className='no-underline text-blue-500' href='https://www.facebook.com/rvrjcce.official/'><FontAwesomeIcon className='text-2xl hover:transform hover:scale-120 hover:cursor-pointer rounded-full p-2 hover:bg-gray-200' icon={faFacebook} /></a></div>
                <div className='w-1/6 items-center justify-center flex p-2 text-blue-600'><a className='no-underline text-blue-600' href='https://www.linkedin.com/school/r.v.r.-&-j.c.-college-of-engineering/'><FontAwesomeIcon className='text-2xl hover:transform hover:scale-120 hover:cursor-pointer rounded-full p-2 hover:bg-gray-200' icon={faLinkedin} /></a></div>
                <div className='w-1/6 items-center justify-center flex p-2 '><a className='no-underline text-black' href='https://twitter.com/rvrjc_official'><FontAwesomeIcon className='text-2xl hover:transform hover:scale-120 hover:cursor-pointer rounded-full p-2 hover:bg-gray-200' icon={faXTwitter} /></a></div>
                <div className='w-1/6 items-center justify-center flex p-2 text-pink-500'><a className='no-underline text-pink-500' href='https://www.instagram.com/rvrjcce.official/'><FontAwesomeIcon className='text-2xl hover:transform hover:scale-120 hover:cursor-pointer rounded-full p-2 hover:bg-gray-200' icon={faInstagram} /></a></div>
                <div className='w-1/6 items-center justify-center  flex p-2 text-red-500'><a className='no-underline text-red-500' href='https://www.youtube.com/c/RVRJCCollegeofEngineering'><FontAwesomeIcon className='text-2xl hover:transform hover:scale-120 hover:cursor-pointer rounded-full p-2 hover:bg-gray-200' icon={faYoutube} /></a></div>
            </div>
        </div>
        <div className='flex flex-col w-full md:w-1/2'>
            <form class="w-full max-w-lg">
                <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    First Name
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
                    
                </div>
                <div class="w-full md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                    Last Name
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
                </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                    email adrress
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="email" placeholder="example.gmail.com"/>
                
                </div>
                </div>
                <div class="w-full">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                        Description
                    </label>
                    <textarea class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="enter text here..."/>
                </div>
                <div class="cursor-pointer w-full text-center hover:bg-blue-600 hover:text-white font-semibold  py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Submit
                </div>
                
                
            </form>
        </div>
    </div>
  )
}

export default Contact