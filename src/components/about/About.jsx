import React from 'react'
import about from "../../img/about.jpg"
import {FaArrowRight} from "react-icons/fa"


const About = () => {
  return (
    <section id='about' style={{fontFamily:"Nunito"}} className='mt-10 flex gap-8 justify-center items-center lg:flex-row md:flex-col sm:flex-col sm:p-2'>
        <div>
            <img src={about} alt="" width={450} />
        </div>
        <div className='flex flex-col'>
        <h3 className='text-red-600 text-2xl'>ABOUT US</h3>
      <h2 className='sm:text-2xl xl:text-4xl'>Welcome to <span className='text-red-600'>Tourist</span></h2>
      <p className='max-w-96'>Tempor erat elitr rebum at clita.Diam dolor diam ipsum sit.Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit</p>
      <p className='max-w-96'>Tempor erat elitr rebum at clita.Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. <br />Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
        <div>
            <ul className='grid md:grid-cols-2 md:gap-3 sm:grid-cols-1'>
                <li className='flex items-center gap-2'>
                <FaArrowRight className='text-red-600'/>
                First Class Flights
                </li>
                <li className='flex items-center gap-2'>
                <FaArrowRight className='text-red-600'/>
                5 Star Accommodations
                </li>
                <li className='flex items-center gap-2'>
                <FaArrowRight className='text-red-600'/>
                150 Premium City Tours
                </li>
            <li className='flex items-center gap-2'>
            <FaArrowRight className='text-red-600'/>
                First Class Flights
                </li>
                <li className='flex items-center gap-2'>
                <FaArrowRight className='text-red-600'/>
                5 Star Accommodations
                </li>
                <li className='flex items-center gap-2'>
                <FaArrowRight className='text-red-600'/>
                150 Premium City Tours
                </li>
            </ul>
        </div>
        <button className='text-white bg-red-600 focus:outline-none hover:py-3 lg:py-3 w-36 sm:w-28 sm:py-2 hover:bg-slate-600 hover:no-underline hover:text-white'>Read More</button>
        </div>
    
    </section>
  )
}

export default About
