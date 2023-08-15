'use client'

import { MemberFieldsFragment } from '@/gql/graphql'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

import { BsArrowUpRight, BsWhatsapp } from 'react-icons/bs'
import { twMerge } from 'tailwind-merge'

import useDarkText from '@/hooks/useDarkText'

type WelderCardProps = {
    welder: MemberFieldsFragment
}

const WelderCard = ({ welder }: WelderCardProps) => {

  // show after mount

  const { darkText } = useDarkText('/team')

  return (
    <div className={twMerge('p-5 pb-8 shadow-md rounded-md', darkText ? 'bg-neutral-50' : 'bg-rose-900')}>
              <div className='relative h-72 w-full -mt-12'>
                <Image className='object-cover object-center rounded-lg' src={welder.featuredImage?.node.sourceUrl as string} fill={true} alt='member'/>
              </div>
              <h1 className={twMerge('text-2xl font-inria-serif font-semibold my-8', darkText ? 'text-neutral-800': 'text-neutral-300')}>{welder.title}</h1>

              <div className="flex flex-col items-center mt-12 gap-y-8">
                <button className={twMerge('bg-transparent border-green-500 border px-8 py-2 rounded-full text-lg font-semibold  w-full', darkText ? 'text-neutral-900' : ' text-neutral-300')}><a href="https://wa.me/+254111338700" target='_blank' className='flex gap-x-4 items-center justify-center'><BsWhatsapp/>whatsapp</a></button>
                <Link href={`/team/${welder.slug}`} className={twMerge('inline-flex gap-x-6 items-center', darkText ? 'medium-btn-outline-bottom-dark' : 'medium-btn-outline-bottom-light')}>
                view projects
                    <BsArrowUpRight/>
                </Link>
            </div>
        </div>
  )
}

export default WelderCard