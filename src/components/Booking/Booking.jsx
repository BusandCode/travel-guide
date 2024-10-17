import React from 'react'
import "./Booking.css"
const Booking = () => {
  return (
    <section style={{fontFamily:"Nunito"}} className='md:container lg:p-5 sm:p-2 ml-auto mr-auto  text-white'>
<div className='booking p-5 flex xl:gap-10 xl:justify-around xl:flex-row items-center sm:flex-col'>
      <div className='p-2'>
        <h3>Booking</h3>
        <h2>Online Booking</h2>
        <p>Tempor erat elitr rebum at clita. 
        Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. 
        Clita erat ipsum et lorem et sit.</p>
        <p className='py-3'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. 
        Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
        sed stet lorem sit clita duo justo magna dolore erat amet</p>
        <button className='my-3 py-3 px-4 hover:bg-slate-600 border-2  focus:outline-none'>Read More</button>
      </div>
      <div>
        <h2 className='text-center'>Book A Tour</h2>
            <div className='flex lg:flex-col sm:flex-col items-start'>
              <div className='flex lg:flex-row sm:flex-col gap-3 my-3'>
              <input type="text" placeholder='Your Name' className='py-3 w-64 bg-transparent border-2 px-2 focus:outline-none'/>
                <input type="email" placeholder='Your Email' className='py-3 w-64 bg-transparent border-2 px-2 focus:outline-none'/>
              </div>
               <div className='flex lg:flex-row sm:flex-col sm:items-start gap-3 my-3'>
               <input type="date" name="" id="" className='py-3 w-64 bg-transparent border-2 px-2 focus:outline-none' placeholder='Enter date and time'/>
               <input type="text" className='py-3 w-64 bg-transparent border-2 px-2 focus:outline-none'/>
               </div>
            <textarea name="" id="" cols="30" placeholder='Send a message' className='resize-none p-2 bg-transparent h-24 w-full border-2 focus:outline-none'></textarea>
            <button className='my-3 py-3 px-4 w-full border-2 hover:bg-slate-600 focus:outline-none'>Book Now</button>
        </div>
      </div>
    </div>
    </section>
    
  )
}

export default Booking
