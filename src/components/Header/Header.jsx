import React from 'react'
import "./Header.css"
import { FaLocationDot } from "react-icons/fa6";
import { FaBars } from 'react-icons/fa6';


const Header = () => {

  return (
    <section style={{fontFamily:"Nunito"}} className='header overflow-hidden'>
      {/* <Nav /> */}
      <div className='z-50 bg-transparent backdrop-blur-xl flex flex-row px-8 py-3 fixed w-100 top-0 border-b-1 border-slate-300 justify-between items-center'>
     <div className='flex flex-row justify-center items-center'>
     <FaLocationDot size={30} className='mb-2 text-red-600' />
     <h1 className='text-red-600 text-3xl'>Tourist</h1>
      </div>
      <div className='lg:flex flex-row sm:hidden justify-center items-center gap-4'>
      <a href="#" className='text-lg hover:no-underline text-white font-bold'>Home</a>
      <a href="#about" className='text-lg hover:no-underline text-white font-bold'>About</a>
      <a href="#services" className='text-lg hover:no-underline text-white font-bold'>Services</a>
      <a href="#packages" className='text-lg hover:no-underline text-white font-bold'>Packages</a>
      <a href="#pages" className='text-lg hover:no-underline text-white font-bold'>Pages</a>
      <a href="#register" className='bg-red-600 text-white rounded-full py-3 px-4 hover:bg-slate-600 hover:no-underline hover:text-white' >Register</a>
      </div>
      <FaBars className='text-white block cursor-pointer lg:hidden' size={30}  />

    </div>
      {/* <div aria-label='Toggle-menu' className='bg-slate-600 relative top-16 h-96 lg:hidden justify-center gap-4 flex flex-col items-center'>
      <a href="#" className='text-lg hover:no-underline text-white font-bold'>Home</a>
      <a href="#about" className='text-lg hover:no-underline text-white font-bold'>About</a>
      <a href="#services" className='text-lg hover:no-underline text-white font-bold'>Services</a>
      <a href="#packages" className='text-lg hover:no-underline text-white font-bold'>Packages</a>
      <a href="#pages" className='text-lg hover:no-underline text-white font-bold'>Pages</a>
      <a href="#register" className='bg-red-600 text-white rounded-full py-3 px-4 hover:bg-slate-600 hover:no-underline hover:text-white' >Register</a>
      </div>
 */}
      <div className='text-center md:my-72 items-center flex flex-col justify-center sm:my-96'>
        <h1 className='text text-white font-bold lg:text-7xl sm:text-2xl md:text-6xl '>Enjoy Your Vacation With Us </h1>
       <p className='text-white text-2x '>Tempor erat elitr rebum at clita diam amet diam et eos erat ipsum lorem si</p>
       <div className='relative mx-auto xl:w-4/5 sm:w-full md:w-3/4 '>
       <input type="text" name="" id="" placeholder='Eg: Thailand' className='rounded-full border-0 w-full py-3 ps-4 pe-5' />
       <button className='bg-red-600 px-7 py-2 rounded-full text-white absolute top-0 end-0 me-2' style={{marginTop:"7px"}}>Search</button>
       </div>
      </div>
    </section>
  )
}

export default Header
