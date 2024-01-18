import React from 'react'
import workingGif from '../assets/Gif/working gif.gif'
export default function Working() {
  return (
    <div>
        <img src={workingGif} alt='' className="mx-auto" width="500px"/>
        <div className="text-center mx-auto mb-6 text-3xl">Work in progress</div>
    </div>
  )
}
