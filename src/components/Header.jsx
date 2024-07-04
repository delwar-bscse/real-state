import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { FaXmark, FaBars } from 'react-icons/fa6'
import logo from '../assets/images/logo.png'
import { useDarkMode } from './DarkModeContext'
import { FaUserCircle, FaMoon, FaSun } from 'react-icons/fa'
import { navItems } from '../components/export'

const Header = () => {
  const [isMenuOpen,setIsMenuOpen] = useState(false);
  const {darkMode, toggleDarkMode} = useDarkMode();

  const toggleMenu = () =>{
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav className={`${darkMode ? 'dark bg-gray-950' : 'light bg-[#f3f3f3]'} flex justify-between items-center gap-4 lg:px-20 px-4 py-3 sticky top-0 z-30`}>
      <div id='logo'>
        <Link to='hero' spy={true} offset={-100} smooth={true}>
          <img src={logo} alt="company logo" className='lg:w[150px] w-[120px] dark:invert'/>
        </Link>
      </div>

      <ul className='lg:flex justify-center gap-8 hidden'>
        {navItems.map(({link,path},index)=>(
          <Link key={index} className='text-black dark:text-white text-[15px] uppercase font-semibold cursor-pointer px-3 py-2 rounded-lg hover:bg-red-600  hover:text-white duration-500' to={path} spy={true} offset={-100} smooth={true}>{link}</Link>
        ))}
      </ul>

      {/* mobile menu icon starts here */}
      <div className={`${isMenuOpen ? "flex" : "hidden"} w-full h-fit bg-slate-800  p-4 absolute top-[88px] left-0`}>
        <ul className='flex flex-col justify-center items-center gap-2 w-full'>
        {navItems.map(({link,path},index)=>(
          <Link key={index} className='text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-red-500 hover:text-black w-full text-center' to={path} spy={true} offset={-100} smooth={true}>{link}</Link>
        ))}
        </ul>
      </div>
      
      <div className='flex justify-center items-center lg:gap-8 gap-2'>
        <FaUserCircle className='size-6 lg:size-8 text-red-500 cursor-pointer' />
        <button onClick={toggleDarkMode} className='flex items-center p-1 rounded-full bg-orange-500 cursor-pointer'>
          {darkMode ? <FaMoon className='text-black lg:size-6' /> : <FaSun className='text-black lg:size-6' />}
        </button>
        <div className='flex justify-center items-center lg:hidden' onClick={toggleMenu}>
          {isMenuOpen ? <FaXmark className='text-black dark:text-white text-2xl cursor-pointer'/> : <FaBars className='text-black dark:text-white text-2xl cursor-pointer'/>}
        </div>
      </div>
    </nav>
  )
}

export default Header