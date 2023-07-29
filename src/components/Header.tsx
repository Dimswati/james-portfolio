import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header>
        <div className='bg-neutral-900 text-neutral-50 antialiased'>
            <div className='h-24 flex justify-between items-center container font-inria-serif'>
                <h1 className='uppercase text-3xl font-bold'>jjwelding</h1>
                <Navbar/>
                <h3 className='text-xl'>+254 111 338 700</h3>
            </div>
        </div>
        <div className='bg-gradient-to-b from-neutral-300 to-neutral-50'>
            <div className='container flex justify-between h-40 items-center'>
                <div className='font-inria-sans text-xl flex flex-col gap-y-3'>
                    <span className='text-2xl font-semibold'>Welcome to JJWelding</span>
                    <p>The Proffesional Metal Fabricator you will love doing business with</p>
                </div>
                <button className='bg-gradient-to-r from-neutral-900 to-rose-900 px-8 py-3 rounded-full text-neutral-50 font-inria-sans text-lg hover:from-rose-900 hover:to-neutral-900 transition duration-300'>Request Quotation</button>
            </div>
        </div>
    </header>
  )
}

export default Header