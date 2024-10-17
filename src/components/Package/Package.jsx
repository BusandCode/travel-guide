import React from 'react'
import p1 from "../../img/package-1.jpg"
import p2 from "../../img/package-2.jpg"
import p3 from "../../img/package-3.jpg"
import { FaLocationDot } from 'react-icons/fa6'
import {FaCalendarAlt, FaUser,FaStar } from 'react-icons/fa'

const Package = () => {
  return (
   <section id='packages' className='mt-10'>
    <div style={{fontFamily:"Nunito"}} id='packages' className='min-h-screen'>
      <div>
      <div className='text-center'>
        <h3 className='text-2xl'>PACKAGES</h3>
        <h2 className='text-slate-600  sm:text-2xl xl:text-4xl'>Awesome Packages</h2>
      </div>
      <div className='w-full xl:mr-auto xl:ml-auto xl:gap-10 sm:gap-6 flex px-3 lg:flex-col md:flex-col sm:flex-col xl:flex-row'>
      <div className='md:w-max md:ml-auto md:mr-auto'>
        <div>
        <img src={p1} alt=""  />
        </div>
        <div className='bg-white py-2'>
        <div className='flex flex-row justify-around border-b-1'>
        <small className='flex flex-row items-center justify-center gap-1 py-1 px-3 text-xl border-e-1 '>
      <FaLocationDot className='text-red-600' />
      Thailand
        </small>
        <small className='flex flex-row items-center justify-center gap-1 py-1 px-3 text-xl border-e-1 '>
      <FaCalendarAlt className='text-red-600' />
      30days
        </small>
        <small className='flex flex-row items-center justify-center gap-1 py-1 pr-3 text-xl'>
      <FaUser className='text-red-600' />
      2 Person
        </small>
        </div>
        <div className='text-center m-2'>
          <h2 className='text-slate-600'>$142</h2>
          <div className='flex flex-row text-red-600 justify-center items-center'>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          </div>
        </div> 
        <p className='text-center px-3'>Tempor erat elitr rebum at clita. Diam dolor diam ips
          um sit diam amet diam eos</p>
          <div className='flex flex-row gap-1 justify-center items-center m-4'>
            <button className='bg-red-600 text-white py-2 px-6 rounded-s-full focus:outline-none hover:bg-slate-600 hover:text-white'>Read More </button>
            <button className='bg-red-600 text-white py-2 px-6 rounded-e-full focus:outline-none hover:bg-slate-600 hover:text-white'>Book Now</button>
          </div>
        </div>
        
      </div>
      <div className='md:w-max md:ml-auto md:mr-auto'>
        <div>
        <img src={p2} alt="" />
        </div>
        
        <div className='bg-white py-2'>
        <div className='flex flex-row justify-around border-b-1'>
        <small className='flex flex-row items-center justify-center gap-1 py-1 px-3 text-xl border-e-1 '>
      <FaLocationDot className='text-red-600' />
      Thailand
        </small>
        <small className='flex flex-row items-center justify-center gap-1 py-1 px-3 text-xl border-e-1 '>
      <FaCalendarAlt className='text-red-600' />
      30days
        </small>
        <small className='flex flex-row items-center justify-center gap-1 py-1 pr-3 text-xl'>
      <FaUser className='text-red-600' />
      2 Person
        </small>
        </div>
        <div className='text-center m-2'>
          <h2 className='text-slate-600'>$139</h2>
          <div className='flex flex-row text-red-600 justify-center items-center'>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          </div>
        </div> 
        <p className='text-center px-3'>Tempor erat elitr rebum at clita. Diam dolor diam ips
          um sit diam amet diam eos</p>
          <div className='flex flex-row gap-1 justify-center items-center m-4'>
            <button className='bg-red-600 text-white py-2 px-6 rounded-s-full focus:outline-none hover:bg-slate-600 hover:text-white'>Read More </button>
            <button className='bg-red-600 text-white py-2 px-6 rounded-e-full focus:outline-none hover:bg-slate-600 hover:text-white'>Book Now</button>
          </div>
        </div>
        
      </div>
      <div className='md:w-max md:ml-auto md:mr-auto'>
        <div>
        <img src={p3} alt="" />
        </div>
       
        <div className='bg-white py-2'>
        <div className='flex flex-row justify-around border-b-1'>
        <small className='flex flex-row items-center justify-center gap-1 py-1 px-3 text-xl border-e-1 '>
      <FaLocationDot className='text-red-600' />
      Thailand
        </small>
        <small className='flex flex-row items-center justify-center gap-1 py-1 px-3 text-xl border-e-1 '>
      <FaCalendarAlt className='text-red-600' />
      30days
        </small>
        <small className='flex flex-row items-center justify-center gap-1 py-1 pr-3 text-xl'>
      <FaUser className='text-red-600' />
      2 Person
        </small>
        </div>
        <div className='text-center m-2'>
          <h2 className='text-slate-600'>$29</h2>
          <div className='flex flex-row text-red-600 justify-center items-center'>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          </div>
        </div> 
        <p className='text-center px-3'>Tempor erat elitr rebum at clita. Diam dolor diam ips
          um sit diam amet diam eos</p>
          <div className='flex flex-row gap-1 justify-center items-center m-4'>
            <button className='bg-red-600 text-white py-2 px-6 rounded-s-full hover:bg-slate-600 hover:text-white focus:outline-none'>Read More </button>
            <button className='bg-red-600 text-white py-2 px-6 rounded-e-full hover:bg-slate-600 hover:text-white focus:outline-none'>Book Now</button>
          </div>
        </div> 
      </div>
      </div>
      </div>
    </div>
   </section>
  )
}

export default Package
