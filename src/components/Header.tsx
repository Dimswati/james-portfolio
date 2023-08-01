import React from 'react'
import Navbar from './Navbar'

import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa6'

const Header = () => {
  return (
    <header>
        <div className='bg-neutral-900 text-neutral-50 antialiased'>
            <div className='h-24 flex justify-between items-center container font-inria-serif'>
                <h1 className='uppercase text-3xl font-bold'>jjwelding</h1>
                <Navbar/>
                <div className="flex gap-x-8">
                    <span className="icon"><FaFacebookF/></span>
                    <span className="icon"><FaTwitter/></span>
                    <span className="icon"><FaInstagram/></span>
                </div>
            </div>
        </div>
        <div className='bg-gradient-to-b from-neutral-300 to-neutral-50'>
            <div className='container flex justify-between h-40 items-center'>
                <div className='font-inria-sans text-xl flex flex-col gap-y-3'>
                    <span className='text-2xl font-semibold'>+254 111 338 700</span>
                    <p className='text-neutral-700'>Anywhere around Kenya, Just call or whatsapp...</p>
                </div>
                <button className='md:inline-block hidden medium-btn-gradient'>Call me now</button>
            </div>
        </div>
    </header>
  )
}

export default Header