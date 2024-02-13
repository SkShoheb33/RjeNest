import React, { useState } from 'react'
// import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
function NewIdea() {
    const navigate = useNavigate();
    let [idea,setIdea]  = useState({
        title:'',
        desc:'',
        fname:'',
        lname:'',
        email:'',
        phNumber:'',
        rollNumber:'',
    });
    let verifyIdeas = ()=>{
        console.log(idea);
        navigate('../')
    }

  return (
    <div className="flex w-full items-center justify-center my-14 ">
            <div className="w-4/5 md:w-1/2">
                <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">This information will be reviewed by our team and we will be contact soon.</p>
            
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">Idea title</label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input onChange={(event)=>setIdea({...idea,title:event.target.value})} type="text" name="title" id="title"  className="block flex-1 border px-2 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="title"/>
                                </div>
                            </div>
                        </div>
            
                        <div className="col-span-full">
                            <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">Description</label>
                            <div className="mt-2">
                                <textarea onChange={(event)=>setIdea({...idea,desc:event.target.value})} id="about" name="about" rows="5" placeholder="give a brief description of your idea." className="p-2 block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>
            
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900 ">First name</label>
                        <div className="mt-2">
                            <input onChange={(event)=>setIdea({...idea,fname:event.target.value})} type="text" placeholder="John" name="first-name" id="first-name"  className="px-2 border block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                    </div>
            
                    <div className="sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">Last name</label>
                        <div className="mt-2">
                            <input onChange={(event)=>setIdea({...idea,lname:event.target.value})} type="text" placeholder="Doe" name="last-name" id="last-name"  className="block w-full rounded-md border px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                    </div>
            
                    <div className="sm:col-span-4">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                        <div className="mt-2">
                            <input onChange={(event)=>setIdea({...idea,email:event.target.value})} id="email" placeholder="name@gmail.com" name="email" type="email"  className="block w-full rounded-md border px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                    </div>
                    <div className="sm:col-span-4">
                        <label htmlFor="number" className="block text-sm font-medium leading-6 text-gray-900">phone number</label>
                        <div className="mt-2">
                            <input onChange={(event)=>setIdea({...idea,phNumber:event.target.value})} id="number" placeholder="9876543210" name="email" type="email"  className="block w-full rounded-md border px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                    </div>
            
            
                    <div className="col-span-full">
                        <label htmlFor="rollNumber" className="block text-sm font-medium leading-6 text-gray-900">Roll number</label>
                        <div className="mt-2">
                            <input onChange={(event)=>setIdea({...idea,rollNumber:event.target.value})} type="text" name="rollNumber" placeholder="ex: y20cs167" id="rollNumber" className="block w-full rounded-md border px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                    </div>
                    </div>
                </div>
            
                
                </div>
                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" className="cancle text-sm rounded-md font-semibold border-none  text-gray-900 px-3 py-2">Cancel</button>
                    <button onClick={verifyIdeas} type="submit" className="no-underline text-sm rounded-md font-semibold border-2  px-3 py-2 bg-[#1e3a8a] text-white">Post</button>
                </div>
            </div>
    </div>
  )
}

export default NewIdea