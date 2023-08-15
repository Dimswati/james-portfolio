'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

import Image from 'next/image'
import Link from 'next/link'

import james from '../../public/james.jpg'

// React Icons
import { FcServices, FcBusinessman, FcAcceptDatabase, FcConferenceCall } from 'react-icons/fc'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa6'
import { IoCloseOutline } from 'react-icons/io5'

// Custom hooks
import useMenu from '@/hooks/useMenu'


type Props = {}

let firstRender = true

const MobileMenu = (props: Props) => {

    const menu = [
        {
            path: '/',
            name: 'James',
            icon: <FcBusinessman/>
        },
        {
            path: '/services',
            name: 'Services',
            icon: <FcServices/>
        },
        {
            path: '/projects',
            name: 'Projects',
            icon: <FcAcceptDatabase/>
        },
        {
            path: '/team',
            name: 'Team',
            icon: <FcConferenceCall/>
        }
    ]

    const pathname = usePathname()

    const menuState = useMenu()

    useEffect(()=>{

        if(firstRender) {
            firstRender = false
            return
        }
        
        if(menuState.isOpen){
            menuState.onClose()
        }
    }, [pathname])

  return (
    <div className={twMerge('md:hidden fixed bg-neutral-900 min-h-[100vh] w-[100vw] z-50 top-0 transition duration-200 ease-in-out px-6 pt-6 font-rubik', menuState.isOpen ? 'translate-x-0' : '-translate-x-[100%]')}>
        <div className='flex justify-between'>
            <div>
                <div className='relative w-20 aspect-square mb-6'>
                    <Image src={james} fill={true} alt='james profile photo' className='rounded-full'/>
                </div>
                <h4 className='text-neutral-200 text-2xl leading-9'>James Nzimo</h4>
                <p className='text-neutral-400 text-lg'>Professinal Metal Fabricator</p>
            </div>
            <button className='h-fit text-neutral-100 mt-4' onClick={menuState.onClose}>
                <IoCloseOutline size={36}/>
            </button>
        </div>

        <div className='my-12 mx-6'>
            <ul className='flex flex-col gap-y-6 text-neutral-300'>
                {
                    menu.map(menuItem => (
                        <Link key={menuItem.path} className={twMerge('text-xl py-3 pl-3 rounded-md w-full', pathname === menuItem.path ? 'bg-neutral-800 text-neutral-200' : 'border-transparent')} href={menuItem.path}>{menuItem.name}</Link>
                    ))
                }
            </ul>
        </div>

        <div className='mt-auto'>
            <h4 className='text-xl text-neutral-200 mb-6'>Get in Touch</h4>
            <div className="flex md:gap-x-8 gap-x-6">
                <span className="icon"><FaFacebookF/></span>
                <span className="icon"><FaTwitter/></span>
                <span className="icon"><FaInstagram/></span>
            </div>
        </div>
    </div>
  )
}

export default MobileMenu