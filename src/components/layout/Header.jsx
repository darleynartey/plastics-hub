import React, {useState} from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'
import {MenuIcon, XIcon} from '@heroicons/react/outline'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  const [head, setHead] = useState(false)
    const handleClick = () => setHead(!head)

    const handleClose =()=> setHead(!head)
  return (
    <div className='w-screen h-[80px] z-50 bg-teal-100 fixed drop-shadow-lg'>
    <div className='px-2 flex justify-between items-center w-full h-full'>
      <div className='flex items-center cursor-pointer'>
        <h1 className='text-2xl font-bold mr-4 sm:text-3xl text-teal-900'>PLASTICS HUB</h1>
        <ul className='hidden md:flex'>
        <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
        <li><Link to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
        <li><Link to="resources" smooth={true} offset={-50} duration={500}>Resources</Link></li>
        <li><Link to="support" smooth={true} offset={-50} duration={500}>Support</Link></li>
        </ul>
      </div>
      <div className='hidden md:flex pr-4'>
        <button className='border-none bg-transparent text-black mr-4' onClick={() => navigate("/login")}>
          Sign In
        </button>
        <button className='px-8 py-3 text-black' onClick={() => navigate("/signup")}>Sign Up
        </button>
      </div>
      <div className='md:hidden mr-4' onClick={handleClick}>
          {!head ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
        
      </div>
    </div>
    <ul className={!head ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="home" smooth={true} duration={500}>Home</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="resources" smooth={true} offset={-50} duration={500}>Resources</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="support" smooth={true} offset={-50} duration={500}>Support</Link></li>

        <div className='flex flex-col my-4'>
            <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign In</button>
            <button className='px-8 py-3'>Sign Up</button>
        </div>
      </ul>
    </div>
  )
}

export default Header