'use client'

import React, { useRef, useState, useEffect, MutableRefObject } from "react"
import { type Swiper as SwiperRef } from 'swiper/types'
import { usePathname } from "next/navigation"
import Image from "next/image"

import { ServiceFieldsFragment } from "@/gql/graphql"
import ServiceSwiper from "./ServiceSwiper"

import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { IoCallOutline } from "react-icons/io5" 

import { twMerge } from "tailwind-merge"

type ServiceSectionProps = {
    service: ServiceFieldsFragment
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ service }: ServiceSectionProps) => {

    const swiperInstance = useRef<SwiperRef>() 

    const instance = swiperInstance as { current: SwiperRef }

    const [ darkText, setDarkText ] = useState(false)

    const pathname = usePathname()

    useEffect(()=>{

        if(pathname === '/services'){
            setDarkText(true)
        }

    }, [pathname])
    
  return (
    <section className="container bg-slate-300 py-16 flex md:flex-row flex-col gap-y-16 lg:gap-x-20 md:gap-x-12 lg:mb-24 mb-20">
        <div className="lg:w-[460px] md:w-[400px] w-full">
            <div className="lg:mb-24 mb-16">
                <ServiceSwiper service={service.serviceFields} instance={instance}/>
            </div>
            <div className={twMerge('flex gap-x-4 relative w-fit after:absolute after:top-[50%] after:left-48 after:w-[90vw] after:h-[1px]', darkText ? 'after:bg-neutral-700' : 'after:bg-neutral-100')}>
                <button className={twMerge("text-xl p-4 border rounded-full", darkText ? 'text-neutral-800 border-neutral-800' : 'text-neutral-100 border-neutral-100')} onClick={()=>instance.current.slidePrev()}><BsChevronLeft/></button>
                <button className={twMerge("text-xl p-4 border rounded-full", darkText ? 'text-neutral-800 border-neutral-800' : 'text-neutral-100 border-neutral-100')} onClick={()=>instance.current.slideNext()}><BsChevronRight/></button>
            </div>
        </div>
            <div className="lg:mt-12 md:mt-8">
                <h4 className= {twMerge("text-3xl font-inria-serif mb-8", darkText ? 'text-neutral-800' : 'text-neutral-100')}>{service.title}</h4>
                <p className={twMerge('text-lg mb-12', darkText ? 'text-neutral-700' : 'text-neutral-300')}>{service.serviceFields?.description as string}</p>
                <button className={twMerge("flex gap-x-4 items-center", darkText ? 'medium-btn-outline-dark' :'medium-btn-outline-light')}><IoCallOutline/><span>Request Quotation</span></button>
        </div>
    </section>
  )
}

export default ServiceSection