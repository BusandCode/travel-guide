import React from 'react'
import d1 from "../../img/destination-1.jpg"
import d2 from "../../img/destination-2.jpg"
import d3 from "../../img/destination-3.jpg"
import d4 from "../../img/destination-4.jpg"

const Destination = () => {
  return (
    <section style={{fontFamily:"Nunito"}}>
      <div className="mt-10">
        <div className='text-center'>
          <h3 className="text-2xl">DESTINATION</h3>
          <h2 className="text-slate-600 sm:text-3xl xl:text-5xl">Our Destinations</h2>
        </div>
        <div className="relative p-3 grid xl:grid-cols-4 gap-5 w-full lg:grid-cols-2 sm:grid-cols-1">
          <div className="relative cursor-pointer">
            <img src={d1} alt="" className="w-full h-96" />
            <small className="absolute top-1 border-1 bg-white p-2 left-1 text-red-600">30% OFF</small>
            <h6 className="absolute bottom-0 right-2 bg-red-600 text-white py-2 px-3">London</h6>
          </div>
          <div className="relative cursor-pointer">
            <img src={d2} alt="" className="w-full h-96"/>
            <small className="absolute top-1 border-1 bg-white p-2 left-1 text-red-600">30% OFF</small>
            <h6 className="absolute bottom-0 right-2 bg-red-600 text-white py-2 px-3">Thailand</h6>
          </div>
          <div className="relative cursor-pointer">
            <img src={d3} alt="" className="w-full h-96"/>
            <small className="absolute top-1 border-1 bg-white p-2 left-1 text-red-600">30% OFF</small>
            <h6 className="absolute bottom-0 right-2 bg-red-600 text-white py-2 px-3">Japan</h6>
          </div>
          <div className="relative cursor-pointer">
            <img src={d4} alt="" className="w-full h-96"/>
            <small className="absolute top-1 border-1 bg-white p-2 left-1 text-red-600">30% OFF</small>
            <h6 className="absolute bottom-0 right-2 bg-red-600 text-white py-2 px-3">Indonesia</h6>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Destination
