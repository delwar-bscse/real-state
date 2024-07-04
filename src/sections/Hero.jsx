import React, { useEffect } from 'react'
import { useDarkMode } from '../components/DarkModeContext'
import heroing from '../assets/images/hero1.webp'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Hero = () => {
  const {darkMode, toggleDarkMode} = useDarkMode();

  useEffect(()=>{
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-out-sine',
      delay: 100
    })
  },[]);

  return (
    <>
      <div id='hero' className={`${darkMode ? 'dark bg-black' : 'light bg-white'} pt-6`}>
        <section className='w-[95%] h-[600px] m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-start lg:px-28 px-10 gap-7 z-20' style={{backgroundImage: `url(${heroing})`}}>
          <h1 data-aos="zoom-in" className='text-6xl text-white font-semibold lg:pr-[500px] pr-0 lg:leading-[70px] leading-[60px]'>Find your next Home in Las Vegas</h1>
          <p data-aos="zoom-in" className='text-white text-xl lg:pr-[500px] pr-0'>Ea ipsum erat ea et sit amet ipsum. Takimata diam amet dolore diam ipsum ut amet sanctus stet, sed clita.</p>
        </section>
      </div>

      {/* form starts from here */}
      <div className={`${darkMode ? 'dark' : 'light bg-transparent'} z-10`}>
        <div data-aos="zoom-in" id='form' className={`${darkMode ? 'dark bg-gray-800' : 'light bg-white'} lg:w-[70%] w-[86%] m-auto grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-6 p-8 rounded-xl -mt-14  shadow-lg`}>
          <div className='w-full'>
            <h1 className='text-black dark:text-white font-semibold'>LOCATION</h1>
            <input type="text" placeholder='Enter an address...' className='bg-white p-2 w-full border-b-[1px] border-[#c9c7c1]' />
          </div>
          
          <div className='w-full'>
            <h1 className='text-black dark:text-white font-semibold'>TYPE</h1>
            <select defaultValue={0} name="selectOption1" id="selectOption1" className='bg-white p-2 border-b-[1px] border-[#c9c7c1] text-gray-500 text-md'>
              <option value="option0" disabled>Select Property</option>
              <option value="option1" >Rentals</option>
              <option value="option2" >Sales</option>
              <option value="option3" >Commercial</option>
            </select>
          </div>

          <div className='w-full'>
            <h1 className='text-black dark:text-white font-semibold'>CATEGORY</h1>
            <select defaultValue={0} name="selectOption2" id="selectOption2" className='bg-white p-2 border-b-[1px] border-[#c9c7c1] text-gray-500 text-md'>
              <option value="opt0" disabled>Property Category</option>
              <option value="opt1" >Duples</option>
              <option value="opt2" >Condos</option>
              <option value="opt3" >Condos</option>
              <option value="opt4" >Condos</option>
              <option value="opt5" >Condos</option>
            </select>
          </div>

          <div className="w-full">
            <button className='bg-red-500 dark:bg-red-700 hover:bg-black dark:hover:bg-white dark:hover:text-black text-lg p-4 w-full text-white font-semibold rounded-xl cursor-pointer transform hover:scale-110 transition-transform duration-300'>SUBMIT</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero