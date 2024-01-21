import React from 'react'
import { Link } from 'react-router-dom'
function NewIdeaBtn() {
  return (
    <Link to="/newidea" className="no-underline blue-gradient drop-shadow-lg text-md md:text-lg fixed  text-white py-1 md:py-2 px-4 md:px-5 right-2 md:right-10 bottom-6 z-10 md:animate-bounce   flex justify-center items-center rounded-full">
            Have an Idea ?
    </Link>
  )
}

export default NewIdeaBtn