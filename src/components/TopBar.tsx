'use client'

// React Icons
import { BsArrowLeft } from 'react-icons/bs'

// Router
import { useRouter } from 'next/navigation'
import React from 'react'

type TopBarProps = {
  children: React.ReactNode
}

const TopBar: React.FC<TopBarProps> = ({
  children
}) => {

    const router = useRouter()

  return (
    <section className='border-b border-neutral-300'>
        <div className='flex items-center justify-between container py-8'>
          <button className='flex items-center gap-x-4 font-inria-sans text-xl' onClick={router.back}>
            <BsArrowLeft/>
            <span>back</span>
          </button>
          {children}
        </div>
    </section>
  )
}

export default TopBar