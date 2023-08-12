'use client'

import React from 'react'
import { CgMenuLeft } from 'react-icons/cg'

import useMenu from '@/hooks/useMenu'

const CloseMenu: React.FC = () => {

    const menuState = useMenu()

  return (
    <button className='md:hidden inline-block text-neutral-800 bg-neutral-50 p-3 fixed z-50 top-32 right-4 rounded-full shadow-md' onClick={menuState.onOpen}>
        <CgMenuLeft size={28}/>
    </button>
  )
}

export default CloseMenu