'use client'

import React from 'react'
import { CgMenuLeft } from 'react-icons/cg'

import useMenu from '@/hooks/useMenu'

const CloseMenu: React.FC = () => {

    const menuState = useMenu()

  return (
    <button className='md:hidden inline-block text-neutral-800' onClick={menuState.onOpen}>
        <CgMenuLeft size={28}/>
    </button>
  )
}

export default CloseMenu