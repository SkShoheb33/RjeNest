import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import './css/style.css'
import { Link } from 'react-router-dom';
function Navbar() {
    useEffect(()=>{
        let togglebtn = document.getElementById('toggle');
        let listItems = document.getElementById('listItems');
        listItems.style.display = "none";
        let isListVisible = true;

        togglebtn.addEventListener('click', () => {
            // Toggle the visibility
            isListVisible = !isListVisible;

            if (isListVisible) {
                listItems.style.display = "flex";
            } else {
                listItems.style.display = "none";
            }
        });
        let closeAll = () => {
            if (aboutItemsVisisble) {
                document.getElementById('aboutItems').style.display = 'none'
                aboutItemsVisisble = false;
            }
            if (programmesItemVisible) {
                document.getElementById('programmesItems').style.display = 'none'
                programmesItemVisible = false;
            }
            if (carrierItemVisible) {
                document.getElementById('carriersItems').style.display = 'none'
                carrierItemVisible = false;
            }
        }
        let aboutItemsVisisble = false;
        document.getElementById('about').addEventListener('click', () => {
            aboutItemsVisisble ? document.getElementById('aboutItems').style.display = 'none' : document.getElementById('aboutItems').style.display = 'flex';
            closeAll();
            aboutItemsVisisble = !aboutItemsVisisble;
        })
        let programmesItemVisible = false;
        document.getElementById('programmes').addEventListener('click', () => {
            programmesItemVisible ? document.getElementById('programmesItems').style.display = 'none' : document.getElementById('programmesItems').style.display = 'flex';
            closeAll();
            programmesItemVisible = !programmesItemVisible;
        })
        let carrierItemVisible = false;
        document.getElementById('carriers').addEventListener('click', () => {
            carrierItemVisible ? document.getElementById('carriersItems').style.display = 'none' : document.getElementById('carriersItems').style.display = 'flex';
            closeAll();
            carrierItemVisible = !carrierItemVisible;
        })
    },[]);
    let closeToggle = ()=>{
        let listItems = document.getElementById('listItems');
        listItems.style.display = "none";
        
    }

  return (
    <div className='sticky top-0 z-10 flex flex-col-reverse'>
        <div id="navbar" className=" bg-white flex justify-between md:justify-start w-full h-[12vh] items-center">
            <Link to="/" className=" flex items-center   md:mx-4 w-3/4 md:w-1/3 no-underline">
                <div className="logo mx-2 w-[50px] h-[50px]  md:w-[65px] md:h-[65px]"></div>
                <div className="font-bold text-[8px] mx-1  md:text-[13px] no-underline  text-black">
                    <div className='my-2 text-lg md:text-xl text-justify text-[#002A66] '>
                        <div className='text-3xl md:text-3xl'>R.V.R. & J.C.</div>  <div className=' text-[#FFCD00]'>ENTERPRISE NEST</div>
                    </div>
                </div>
            </Link>
            {/*laptop view*/}
            <div className="hidden text-sm items-center h-full md:flex flex-row w-2/3 font-semibold  justify-between">
                <Link to="/" className=" c  flex flex-col items-center w-1/6 justify-center hover:font-bold hover:cursor-pointer">
                    HOME
                </Link>
                <div className="a  h-full  flex w-1/6 relative flex-col justify-center ">
                    <div className="flex c  justify-center hover:font-bold hover:cursor-pointer">
                        PROGRAMMES
                    </div>
                    <div className="b flex  absolute top-[10vh] w-[200px] p-3 rounded-sm text-sm flex-col font-normal bg-white">
                        <Link to="/programmes/rjenesstincubation" className="flex p-1 flex-col hover:cursor-pointer hover:bg-white hover:text-black rounded-sm hover:font-bold">
                            RjeNest Incubation
                        </Link>
                        <Link to="/programmes/cyberspark" className="flex p-1 flex-col hover:cursor-pointer hover:bg-white hover:text-black rounded-sm hover:font-bold">
                            Cyber spark
                        </Link>
                        <Link to="/programmes/itknowledgepark" className="flex p-1 flex-col hover:cursor-pointer hover:bg-white hover:text-black rounded-sm hover:font-bold">
                            IT Knowledge Park
                        </Link>
                        <Link to="/programmes/buildindia2023"  className="flex p-1 flex-col hover:cursor-pointer hover:bg-white hover:text-black rounded-sm hover:font-bold">
                            Build India 2023
                        </Link>
                        <Link to="/programmes/falcon" className="flex p-1 flex-col hover:cursor-pointer hover:bg-white hover:text-black rounded-sm hover:font-bold">
                            FALCON
                        </Link>
                    </div>
                </div>
                <div className="a  h-full  flex w-1/6 relative flex-col justify-center ">
                    <div className="flex  c  justify-center hover:font-bold hover:cursor-pointer">
                        ABOUT
                    </div>
                    <div className="b flex  absolute top-[10vh] w-[200px] p-3 rounded-sm text-sm flex-col font-normal bg-white">
                        <Link to="/about" className="flex p-1 flex-col hover:cursor-pointer hover:bg-white hover:text-black rounded-sm hover:font-bold">
                            About RjeNest
                        </Link>
                        <Link to="/about/directors" className="flex p-1 flex-col hover:cursor-pointer hover:bg-white hover:text-black rounded-sm hover:font-bold">
                            Board of Directors
                        </Link>
                        <Link to="/about/teams" className="flex p-1 flex-col hover:cursor-pointer hover:bg-white hover:text-black rounded-sm hover:font-bold">
                            Team
                        </Link>
                        <Link to="/about/guidelines" className="flex p-1 flex-col hover:cursor-pointer hover:bg-white hover:text-black rounded-sm hover:font-bold">
                            Guidelines
                        </Link>
                        <Link to="/about/faqs" className="flex p-1 flex-col hover:cursor-pointer hover:bg-white hover:text-black rounded-sm hover:font-bold">
                            FAQ
                        </Link>
                    </div>
                </div>
                <div className="a  h-full  flex w-1/6 relative flex-col justify-center ">
                    <div className="flex  c  justify-center hover:font-bold hover:cursor-pointer">
                        CARRIERS
                    </div>
                    <div className="b flex absolute top-[10vh] w-[200px] p-3 rounded-sm text-sm flex-col font-normal bg-white">
                        <Link to="/carriers" className="flex p-1 flex-col hover:cursor-pointer hover:bg-white hover:text-black rounded-sm hover:font-bold">
                            Carriers at RjeNest
                        </Link>
                        <Link to="/carriers" className="flex p-1 flex-col hover:cursor-pointer  hover:bg-white hover:text-black rounded-sm hover:font-bold">
                            Carriers at RjeNest Startups
                        </Link>

                    </div>
                </div>
                <Link to="/partners" className="flex  c  flex-col items-center w-1/6 justify-center hover:font-bold hover:cursor-pointer">
                    PARTNERS
                </Link>
                <Link to="/connect" className="flex c   flex-col items-center w-1/6 justify-center hover:font-bold hover:cursor-pointer">
                    CONNECT
                </Link>
                <div className='w-1/6'>
                    <img className='w-1/2' src='https://pbs.twimg.com/profile_images/1379267817917194242/0li1iGtn_400x400.jpg' alt=''/>
                </div>
            </div>
            {/*phone view*/}
            <div className="md:hidden mx-8 relative">
                <div className=" flex flex-col text-xl ">
                    <FontAwesomeIcon id='toggle' icon={faBars}/>
                    <div id="listItems" className="text-xs  flex-col flex absolute bg-white w-[100vw] top-10 p-2 right-[-32px]">
                        <div className="flex tracking-widest w-full p-2">HOME</div>
                        <div className="flex  tracking-widest justify-between w-full p-2 border-t-2">
                            <div className="flex flex-col w-full ">
                                <div id="about">ABOUT</div>
                                <div id="aboutItems" className="flex flex-col leading-loose mt-3 w-full ">
                                    <Link onClick={closeToggle} to="/about" className="navInnerItems tracking-widest bg-blue-900 text-white rounded-sm w-full px-2 py-1">About RjeNest</Link>
                                    <Link onClick={closeToggle} to="/about/directors" className="navInnerItems tracking-widest bg-blue-900 text-white rounded-sm w-full px-2 py-1">Board Of Directors</Link>
                                    <Link onClick={closeToggle} to="/about/teams" className="navInnerItems tracking-widest bg-blue-900 text-white rounded-sm w-full px-2 py-1">Team</Link>
                                    <Link onClick={closeToggle} to="/about/guidelines" className="navInnerItems tracking-widest bg-blue-900 text-white rounded-sm w-full px-2 py-1">Guidelines</Link>
                                    <Link onClick={closeToggle} to="/about/faqs" className="navInnerItems tracking-widest bg-blue-900 text-white rounded-sm w-full px-2 py-1">FAQ's</Link>
                                </div>
                            </div>
                            <i className="fa-solid fa-caret-down"></i>
                        </div>
                        <div className="flex tracking-widest justify-between w-full p-2 border-t-2">
                            <div className="flex flex-col w-full ">
                                <div id="programmes">PROGRAMMES</div>
                                <div id="programmesItems" className="flex flex-col leading-loose mt-3 w-full ">
                                    <Link onClick={closeToggle} to="/programmes/rjenesstincubation" className="navInnerItems tracking-widest bg-blue-900 text-white rounded-sm w-full px-2 py-1">RjeNest Incubation</Link>
                                    <Link onClick={closeToggle} to="/programmes/cyberspark" className="navInnerItems tracking-widest bg-blue-900 text-white rounded-sm w-full px-2 py-1">Cyber Spark</Link>
                                    <Link onClick={closeToggle} to="/programmes/itknowledgepark" className="navInnerItems tracking-widest bg-blue-900 text-white rounded-sm w-full px-2 py-1">IT Knowledge Park</Link>
                                    <Link onClick={closeToggle} to="/programmes/buildindia2023" className="navInnerItems tracking-widest bg-blue-900 text-white rounded-sm w-full px-2 py-1">Build India 2023</Link>
                                    <Link onClick={closeToggle} to="/programmes/falcon" className="navInnerItems tracking-widest bg-blue-900 text-white rounded-sm w-full px-2 py-1">FALCON</Link>
                                </div>
                            </div>
                            <i className="fa-solid fa-caret-down"></i>
                        </div>
                        <div className="flex tracking-widest justify-between w-full p-2 border-t-2">
                            <div className="flex flex-col w-full ">
                                <div id="carriers">CARRIERS</div>
                                <div id="carriersItems" className="flex flex-col leading-loose mt-3 w-full ">
                                    <Link onClick={closeToggle} to="/carriers" className="navInnerItems tracking-widest bg-blue-900 text-white rounded-sm w-full px-2 py-1">Carriers at RjeNest</Link>
                                    <Link onClick={closeToggle} to="/carriers" className="navInnerItems tracking-widest bg-blue-900 text-white rounded-sm w-full px-2 py-1">Carriers at RjeNest Startups</Link>
                                </div>
                            </div>
                            <i className="fa-solid fa-caret-down"></i>
                        </div>
                        <div className="flex tracking-widest justify-between w-full p-2 border-t-2">
                            <Link onClick={closeToggle} to="/partners" className="flex">
                                Partners
                            </Link>

                        </div>
                        <div className="flex tracking-widest justify-between w-full p-2 border-t-2">
                            <a  href="#footer" className="flex">
                                CONNECT
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='blue-gradient p-1 md:p-3 text-[8px] md:text-[16px] text-center text-white flex justify-center items-center'>
            RVR & JCCE STP Foundation DST - NIDHI - iTBI Scheme Sponsored by 
            Department of Science and Technology, Govt. of India
                        & RVR & JC College of Engineering(A)
        </div>
    </div>
  )
}

export default Navbar