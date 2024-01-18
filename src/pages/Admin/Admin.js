import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faCalendar, faChartLine, faExclamationCircle, faNewspaper, faRightFromBracket, faUsers } from '@fortawesome/free-solid-svg-icons'
import { NavLink, Outlet} from 'react-router-dom'
import './style.css'
function Admin() {
  return (
    <div className='flex'>
        <div className='w-1/4 gap-2 border-r flex-col py-10 border-blue-500 h-[100vh] flex justify-start items-center'>
            <NavLink to='dashboard' className='no-underline text-black text-md hover:bg-blue-100 cursor-pointer gap-2 flex items-center w-2/3 p-2 rounded font-bold'>
                 <FontAwesomeIcon icon={faChartLine} />
                 <div >Dashboard</div>
            </NavLink>
            <NavLink to='studentIdeas' className='no-underline text-black text-md hover:bg-blue-100 cursor-pointer gap-2 flex items-center w-2/3 p-2 rounded font-bold'>
                 <FontAwesomeIcon icon={faBell} />
                 <div>Student ideas</div>
            </NavLink>
            <NavLink to='studentQueries' className='no-underline text-black text-md hover:bg-blue-100 cursor-pointer gap-2 flex items-center w-2/3 p-2 rounded font-bold'>
                 <FontAwesomeIcon icon={faExclamationCircle} />
                 <div >Student Queries</div>
            </NavLink>
            <NavLink to='events' className='no-underline text-black text-md hover:bg-blue-100 cursor-pointer gap-2 flex items-center w-2/3 p-2 rounded font-bold'>
                 <FontAwesomeIcon icon={faCalendar} />
                 <div>Events</div>
            </NavLink>
            <NavLink to='news' className='no-underline text-black text-md hover:bg-blue-100 cursor-pointer gap-2 flex items-center w-2/3 p-2 rounded font-bold'>
                 <FontAwesomeIcon icon={faNewspaper} />
                 <div>News</div>
            </NavLink>
            <NavLink to='studentLogs' className='no-underline text-black text-md hover:bg-blue-100 cursor-pointer gap-2 flex items-center w-2/3 p-2 rounded font-bold'>
                 <FontAwesomeIcon icon={faUsers} />
                 <div>Student logs</div>
            </NavLink>
            <NavLink to='../' className=' no-underline text-white bg-red-500 text-md cursor-pointer gap-2 flex items-center w-2/3 p-2 rounded font-bold'>
                 <FontAwesomeIcon icon={faRightFromBracket} />
                 <div>Logout</div>
            </NavLink>
        </div>
        <div className='w-3/4 p-8 h-[100vh] overflow-scroll'>
            <Outlet/>      
        </div>
    </div>
  )
}

export default Admin