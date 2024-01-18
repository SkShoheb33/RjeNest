import React from 'react'

function About() {
  return (
    <div className='p-8 flex flex-col justify-center items-center w-4/5 mx-auto'>
        <div className='text-xl md:text-2xl font-bold text-center my-1'>About</div>
        <div className='flex flex-col gap-4 md:flex-row  justify-center'>
            <div className='w-full md:w-1/2 flex items-end justify-end '><iframe className='w-[80%] h-[100%]' src="https://www.youtube.com/embed/-2PlexPaGW8?si=7Owb6WzWopti-5DW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
            <div className='text-md w-full md:w-1/2 text-justify'> RJNEST envisions the creation of an all-encompassing and empowering resource platform for emerging entrepreneurs across diverse realms of science and technology. Its mission is to elevate and intensify the incubation endeavors and knowledge-driven entrepreneurial initiatives at UoH, fostering the development of a dynamic entrepreneurial ecosystem on the campus. Presently, RJNEST<span className='text-gray-400'>... Read more</span></div>
        </div>  
    </div>
  )
}

export default About