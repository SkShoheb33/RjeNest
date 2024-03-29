import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
function Events() {
    let data = [
        {title:'title1',desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",vedio:"https://www.youtube.com/watch?v=-2PlexPaGW8",personal:{
          name:'Student1',email:'student1@gmail.com',mobile:'987018027',rollNumber:'Y20CS167'
        }},
        {title:'title2',desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",vedio:"https://www.youtube.com/watch?v=-2PlexPaGW8",personal:{
          name:'Student1',email:'student1@gmail.com',mobile:'987018027',rollNumber:'Y20CS167'
        }},
        {title:'title3',desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",vedio:"https://www.youtube.com/watch?v=-2PlexPaGW8",personal:{
          name:'Student1',email:'student1@gmail.com',mobile:'987018027',rollNumber:'Y20CS167'
        }},
      ]
  return (
    <div className='h-[90vh] relative w-full '> 
        <Link to='createEvent'>
        <FontAwesomeIcon className='z-10 shadow-lg bg-blue-600 text-white p-3 rounded-full absolute right-0 bottom-0 cursor-pointer' icon={faPlus}/>
        </Link>
        <div className='h-[90vh]  flex flex-col gap-6 overflow-scroll '>
        {
        data.map((d,i)=>
        <div className='card p-3 flex flex-col gap-2'>
            <div className='font-bold text-xl'>{d.title}</div>
            <div className='text-sm'>{d.desc}</div>
            <div className='flex gap-2 items-center cursor-pointer text-md bg-blue-600  w-fit px-2 py-1 rounded text-white'>
            <FontAwesomeIcon icon={faPenToSquare} />
            <div >Edit</div>
            </div>
        </div>
        )
        }    
        </div>
    </div>
  )
}

export default Events