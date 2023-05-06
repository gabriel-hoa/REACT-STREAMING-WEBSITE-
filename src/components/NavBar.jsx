import React from 'react';
import Logo from '../images/mediaplayer2.png';
import Login from './Login';
import {NavLink} from 'react-router-dom';

function NavBar() {
  return (
    <div className="
    w-full
    flex 
    items-center
    justify-center
    relative
    space-x-1
    bg-black
    text-white
    pl-3 "> 

        <img src= {Logo} 
          className="w-[60px] rounded-[50%]">
      
        </img>
        <h3><u className='text-sky-700 text-sm'>UMOVIES</u></h3>

        <NavLink to='/'>
        <h3 className="font-bold px-7 max-sm:px-2 cursor-pointer hover:text-sky-700 text-l max-sm:text-xs hover:scale-110"
        >Home</h3>
        </NavLink>
        <NavLink to='/'>
        <h3 className="font-bold px-7 max-sm:px-2  cursor-pointer hover:text-sky-700 text-l max-sm:text-xs  hover:scale-110"
        >Categories</h3>
        </NavLink>
      
        <NavLink to='/login' >
        <h3 className="justify-end font-bold cursor-pointer px-7 max-sm:px-2 text-l max-sm:text-xs  hover:text-sky-700 hover:scale-110"
        >Login</h3>
        </NavLink>
        <h5 className="flex items-end cursor-pointer px-7 max-sm:px-2 text-sm max-sm:text-xs  hover:text-sky-700 hover:scale-110"
        ><u>Help?</u></h5>
        
      
        
        </div>
   
        

  )
}

export default NavBar;