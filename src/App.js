import React from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import RjenestIncubation from './pages/RjenestIncubation'
import CyberSpark from './pages/CyberSpark'
import BuildIndia2023 from './pages/BuildIndia2023'
import ItKnowledgePark from './pages/ItKnowledgePark'
import Falcon from './pages/Falcon'
import About from './pages/About'
import Directors from './pages/Directors'
import Teams from './pages/Teams'
import GuideLines from './pages/GuideLines'
import FAQ from './pages/FAQ'
import Carriers from './pages/Carriers'
import Partners from './pages/Partners'
import NewIdeaBtn from './components/NewIdeaBtn'
import NewIdea from './pages/NewIdea'
import Contact from './pages/Contact'
import Admin from './pages/Admin/Admin'
import Dashboard from './pages/Admin/Dashboard'
import StudentIdeas from './pages/Admin/StudentIdeas'
import StudentQueries from './pages/Admin/StudentQueries'
import AdminEvents from './pages/Admin/AdminEvents'
import AdminNews from './pages/Admin/AdminNews'
import StudentLogs from './pages/Admin/StudentLogs'
import CreateEvent from './pages/Admin/CreateEvent'
import Events from './pages/Admin/Events'
import CreateNews from './pages/Admin/CreateNews'
import News from './pages/Admin/News'

function App() {
  let pathname = window.location.pathname.split('/')[1];
  console.log( window.location.pathname.split('/'))
  return (
    <div>
      {pathname!=='admin' && <Navbar/>}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/programmes/rjenesstincubation' element={<RjenestIncubation/>}></Route>
        <Route path='/programmes/cyberspark' element={<CyberSpark/>}></Route>
        <Route path='/programmes/itknowledgepark' element={<ItKnowledgePark/>}></Route>
        <Route path='/programmes/buildindia2023' element={<BuildIndia2023/>}></Route>
        <Route path='/programmes/falcon' element={<Falcon/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/about/directors' element={<Directors/>}></Route>
        <Route path='/about/teams' element={<Teams/>}></Route>
        <Route path='/about/guidelines' element={<GuideLines/>}></Route>
        <Route path='/about/faqs' element={<FAQ/>}></Route>
        <Route path='/carriers' element={<Carriers/>}></Route>
        <Route path='/carriers' element={<Carriers/>}></Route>
        <Route path='/partners' element={<Partners/>}></Route>
        <Route path='/newidea' element={<NewIdea/>}></Route>
        <Route path='/connect' element={<Contact/>}></Route>
        <Route path='/admin' element={<Admin/>}>
          <Route index path='dashboard' element={<Dashboard/>}/>
          <Route path='studentIdeas' element={<StudentIdeas/>}/>
          <Route path='studentQueries' element={<StudentQueries/>}/>
          <Route path='events' element={<AdminEvents/>}>
            <Route path='' element={<Events/>}/>
            <Route path='createEvent' element={<CreateEvent/>}/>
          </Route>
          <Route path='news' element={<AdminNews/>}>
            <Route path='' element={<News/>}/>
            <Route path='createNews' element={<CreateNews/>}/>
          </Route>
          <Route path='studentLogs' element={<StudentLogs/>}/>
        </Route>
      </Routes>
      {pathname!=='admin' && <NewIdeaBtn/>}
      {pathname!=='admin' && <Footer/>}
    </div>
    
  )
}

export default App
