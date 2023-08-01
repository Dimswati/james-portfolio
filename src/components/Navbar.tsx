'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

// React Icons
import { FcServices, FcBusinessman, FcAcceptDatabase, FcConferenceCall } from 'react-icons/fc'


const Navbar = () => {

    const pathname = usePathname()

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

  return (
    <ul className='lg:flex gap-x-4 font-inria-sans hidden'>
        {menu.map(menuItem => (
            <li key={menuItem.path} className={twMerge('text-lg hover:bg-white/20 hover:cursor-pointer transition-colors duration-300 rounded-full py-2 px-4 flex gap-x-4 items-center', pathname === menuItem.path ? 'bg-white/20' : null)}>
                {menuItem.icon}
                <Link href={menuItem.path}>{menuItem.name}</Link>
            </li>
        ))}
    </ul>
  )
}

export default Navbar