import React from 'react'

import ExploreCarrier from '../components/ExploreCarrier'
import AddValues from '../components/AddValues'
import Impact from '../components/Impact'
import News from '../components/News'
import VisionMission from '../components/VisionMission'
import Events from '../components/Events'
import ControlledCarousel from '../components/ControlledCarousel'
import About from '../components/About'
import Sponsers from '../components/Sponsers'
// import HomePartners from '../components/HomePartners'
function Home() {
  return (
    <div className='flex flex-col'>
        <ControlledCarousel/>
        <Sponsers/>
        <About/>
        <VisionMission/>
        <Impact/>
        <News/>
        <AddValues/>
        <Events/>        
        <ExploreCarrier/>
    </div>
  )
}
// <ControlledCarousel/>
export default Home