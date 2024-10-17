import React from 'react'
import { FaCog, FaGlobe, FaHotel, FaUser } from "react-icons/fa";

const Services = () => {
  return (
    <section  style={{fontFamily:"Nunito"}} id='services' className='mt-10'>
        <div>
            <div className='text-center'>
                <h3 className='text-red-600  text-2xl'>SERVICES</h3>
                <h2 className='text-slate-600 sm:text-2xl xl:text-4xl'>Our Services</h2>
            </div>
            <div className='container p-0 text-slate-700'>
            <div className='grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 xl:gap-10 md:gap-6 sm:gap-4'>
            <div className='rounded-lg p-4 cursor-pointer shadow-2xl hover:bg-slate-600 hover:text-white'>
                <FaGlobe size={40}/>
                <h3 className='text-xl top-2 bottom-1 relative'>WorldWide Tours</h3>
                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
            </div>
            <div className='rounded-lg cursor-pointer p-4 shadow-2xl  hover:bg-slate-600 hover:text-white'>
                <FaHotel size={40} />
                <h3 className='text-xl top-2 bottom-1 relative'>Hotel Reservation</h3>
                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
            </div>
            <div className='rounded-lg cursor-pointer p-4 shadow-2xl  hover:bg-slate-600 hover:text-white'>
                <FaUser size={40} />
                <h3 className='text-xl top-2 bottom-1 relative'>Travel Guides</h3>
                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
            </div>
            <div className='rounded-lg cursor-pointer p-4 shadow-2xl  hover:bg-slate-600 hover:text-white'>
                <FaCog size={40} />
                <h3 className='text-xl top-2 bottom-1 relative' t>Event Management</h3>
                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
            </div>
            <div className='rounded-lg cursor-pointer p-4 shadow-2xl  hover:bg-slate-600 hover:text-white'>
                <FaGlobe size={40} />
                <h3 className='text-xl top-2 bottom-1 relative'>WorldWide Tours</h3>
                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
            </div>
            <div className='rounded-lg cursor-pointer p-4 shadow-2xl  hover:bg-slate-600 hover:text-white'>
                <FaUser size={40} />
                <h3 className='text-xl top-2 bottom-1 relative'>WorldWide Tours</h3>
                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
            </div>
            <div className='justify-center items-center rounded-lg cursor-pointer p-4 shadow-2xl  hover:bg-slate-600 hover:text-white'>
                <FaHotel size={40}/>
                <h3 className='text-xl top-2 bottom-1 relative'>WorldWide Tours</h3>
                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
            </div>
            <div className='justify-center items-center py-2 rounded-lg cursor-pointer p-4 shadow-2xl  hover:bg-slate-600 hover:text-white'>
                <FaCog size={40} />
                <h3 className='text-xl top-2 bottom-1 relative '>Event Management</h3>
                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
            </div>
            </div>
            
            </div>
            
        </div>
    </section>
  )
}

export default Services
