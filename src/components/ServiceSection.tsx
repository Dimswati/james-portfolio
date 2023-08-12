'use client'

import React, { useRef } from "react"
import { type Swiper as SwiperRef } from 'swiper/types'

import { ServiceFieldsFragment } from "@/gql/graphql"
import ServiceSwiper from "./ServiceSwiper"

import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { IoCallOutline } from "react-icons/io5" 

import { twMerge } from "tailwind-merge"
import useDarkText from "@/hooks/useDarkText"

type ServiceSectionProps = {
    service: ServiceFieldsFragment
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ service }: ServiceSectionProps) => {

    const swiperInstance = useRef<SwiperRef>() 

    const instance = swiperInstance as { current: SwiperRef }


    const { darkText } = useDarkText('/services')
    
  return (
    <section className="flex md:flex-row flex-col gap-y-12 lg:gap-x-20 md:gap-x-12 lg:mb-24 mb-24">
        <div>
            <div className="lg:h-[320px] md:h-[280px] h-72 lg:w-[460px] md:w-[400px] w-full lg:mb-24 mb-16">
                <ServiceSwiper service={service.serviceFields} instance={instance}/>
            </div>
            <div className={twMerge('flex gap-x-4 relative w-fit after:absolute after:top-[50%] after:left-48 after:w-[90vw] after:h-[1px]', darkText ? 'after:bg-neutral-700' : 'after:bg-neutral-100')}>
                <button className={twMerge("text-xl p-4 border rounded-full", darkText ? 'text-neutral-800 border-neutral-800' : 'text-neutral-100 border-neutral-100')} onClick={()=>instance.current.slidePrev()}><BsChevronLeft/></button>
                <button className={twMerge("text-xl p-4 border rounded-full", darkText ? 'text-neutral-800 border-neutral-800' : 'text-neutral-100 border-neutral-100')} onClick={()=>instance.current.slideNext()}><BsChevronRight/></button>
        </div>
        </div>
            <div>
                <h4 className= {twMerge("text-3xl font-inria-serif mb-8", darkText ? 'text-neutral-800' : 'text-neutral-100')}>{service.title}</h4>
                <p className={twMerge('text-xl leading-8 mb-12', darkText ? 'text-neutral-700' : 'text-neutral-300')}>{service.serviceFields?.description as string}</p>
                <button className={twMerge("flex gap-x-4 items-center", darkText ? 'medium-btn-outline-dark' :'medium-btn-outline-light')}><IoCallOutline/><a href="tel:+254115152238" className="w-full block">Call me now</a>
                </button>
        </div>
    </section>
  )
}

export default ServiceSection