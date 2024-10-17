import React from 'react'
import {FaFacebookF} from "react-icons/fa"
import {FiInstagram} from "react-icons/fi"
import {IoLogoTwitter} from "react-icons/io"

const Footer = () => {
  return (
    <div style={{fontFamily:"Nunito"}}>
      <div className='bg-slate-600 flex mt-5 p-5 flex-col gap-5 items-center justify-evenly'>
        <h2>CODELAB</h2>
         <div className='justify-around gap-3 flex xl:flex-row sm:flex-col items-center'>
      <a href="#" className='text-lg hover:no-underline text-white font-bold'>Home</a>
      <a href="#about" className='text-lg hover:no-underline text-white font-bold'>About</a>
      <a href="#services" className='text-lg hover:no-underline text-white font-bold'>Services</a>
      <a href="#packages" className='text-lg hover:no-underline text-white font-bold'>Packages</a>
      <a href="#pages" className='text-lg hover:no-underline text-white font-bold'>Pages</a>
      </div>
      <div className="flex xl:flex-row gap-5">
        <a href="https://facebook.com" className='p-3 border-1 rounded-lg'><FaFacebookF /></a>
        <a href="https://instagram.com" className='p-3 border-1 rounded-lg'><FiInstagram /></a>
        <a href="https://twitter.com" className='p-3 border-1 rounded-lg'><IoLogoTwitter /></a>
      </div>
      <div className="text-xl text-white">
        <small>&copy; Adetokunbo Andrew. All rights reserved.</small>
      </div>
      </div>
    </div>
  )
}

export default Footer
