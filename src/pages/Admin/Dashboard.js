import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft, faLightbulb, faUsers } from '@fortawesome/free-solid-svg-icons'
function Dashboard() {
    let data = [
        {admin:"Admin1",changes:"Event added",time:"10:10 PM"},
        {admin:"Admin1",changes:"Event added",time:"10:10 PM"},
        {admin:"Admin1",changes:"Event added",time:"10:10 PM"},
        {admin:"Admin1",changes:"Event added",time:"10:10 PM"},
        {admin:"Admin1",changes:"Event added",time:"10:10 PM"},
        {admin:"Admin1",changes:"Event added",time:"10:10 PM"},
        {admin:"Admin1",changes:"Event added",time:"10:10 PM"},
        {admin:"Admin1",changes:"Event added",time:"10:10 PM"},
        {admin:"Admin1",changes:"Event added",time:"10:10 PM"},
        {admin:"Admin1",changes:"Event added",time:"10:10 PM"},
        {admin:"Admin1",changes:"Event added",time:"10:10 PM"},
        {admin:"Admin1",changes:"Event added",time:"10:10 PM"},
        {admin:"Admin1",changes:"Event added",time:"10:10 PM"},
        {admin:"Admin1",changes:"Event added",time:"10:10 PM"},
        {admin:"Admin1",changes:"Event added",time:"10:10 PM"},
        {admin:"Admin1",changes:"Event added",time:"10:10 PM"},
        {admin:"Admin1",changes:"Event added",time:"10:10 PM"}
    ]
  return (
    <div className='flex flex-col'>
        <div className='flex w-full p-8 gap-2'>
            <div className='flex w-1/3 flex-col items-center p-2 rounded shadow-xl bg-pink-300'>
                <div className='text-xl font-bold'>Student ideas</div>
                <FontAwesomeIcon className='text-yellow-200 text-4xl my-4' icon={faLightbulb} />
                <div className='text-2xl '>count : 20</div>
            </div>
            <div className='flex w-1/3 flex-col items-center p-2 rounded shadow-xl bg-orange-300'>
                <div className='text-xl font-bold'>Student logins</div>
                <FontAwesomeIcon className='text-blue-200 text-4xl my-4' icon={faUsers} />
                <div className='text-2xl '>count : 20</div>  
            </div>
        </div>
        <div className='flex flex-col h-[50vh]  overflow-scroll'>
            <div className='text-xl font-bold flex items-center gap-2'><FontAwesomeIcon icon={faClockRotateLeft} /><div className=''> Recent Activity</div></div>
                <table class="table-auto my-3 text-sm">
                    <thead>
                        <tr>
                            <th>Admin login</th>
                            <th>Activiyt changed</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((d,i)=>
                                <tr>
                                    <td>{d.admin}</td>
                                    <td>{d.changes}</td>
                                    <td>{d.time}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
        </div>
    </div>
  )
}

export default Dashboard