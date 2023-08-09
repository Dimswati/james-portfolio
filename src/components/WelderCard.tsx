import { MemberFieldsFragment } from '@/gql/graphql'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { BsArrowUpRight, BsWhatsapp } from 'react-icons/bs'

type WelderCardProps = {
    welder: MemberFieldsFragment
}

const WelderCard = ({ welder }: WelderCardProps) => {

  return (
    <div className='p-5 pb-8 shadow-md rounded-md'>
              <div className='relative h-72 w-full -mt-12'>
                <Image className='object-cover object-center rounded-lg' src={welder.featuredImage?.node.sourceUrl as string} fill={true} alt='member'/>
              </div>
              <div>
                <h1 className='text-2xl font-inria-serif font-semibold my-8'>{welder.title}</h1>
                <p className='font-rubik' dangerouslySetInnerHTML={{__html: welder.content as string}}/>
              </div>

              <div className="flex flex-col items-center mt-12 gap-y-8">
                <button className='bg-transparent border px-8 py-2 rounded-full text-neutral-900 text-lg font-semibold hover:from-rose-900 hover:to-neutral-900 transition duration-300 border-green-800 w-full'><a href="https://wa.me/+254111338700" className='flex gap-x-4 items-center justify-center'><BsWhatsapp/>whatsapp</a></button>
                <Link href={`/team/${welder.slug}`} className='medium-btn-outline-bottom-dark inline-flex gap-x-6 items-center'>
                view projects
                    <BsArrowUpRight/>
                </Link>
            </div>
        </div>
  )
}

export default WelderCard