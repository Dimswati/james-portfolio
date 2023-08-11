'use client'

import React, { MutableRefObject} from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';

import { type Swiper as SwiperRef } from 'swiper/types'

import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/bundle';

import { CustomServiceFieldsFragment } from '@/gql/graphql';

type ServiceSwiperProps = {
  instance?: MutableRefObject<SwiperRef>
  service: CustomServiceFieldsFragment | null
}

const ServiceSwiper: React.FC<ServiceSwiperProps> = ({ service, instance }) => {

  if(!service?.photos) {
    return null
  }

  return (
    <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        loop={true}
        spaceBetween={10}
        speed={600}
            onInit={(swiper)=>{
              if(instance){
                console.log(swiper)
                instance.current = swiper
              }
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: true
            }} 
            className='bg-slate-400' 
          >
            {
              service.photos.map(photo => (
                <SwiperSlide key={photo?.id as string} className='px-1 bg-slate-100'>
                    {/* <div className="relative lg:h-[320px] lg:w-[460px] md:h-[280px] md:w-[400px] h-72 lg:mb-24 w-full">
                        <Image src={photo?.sourceUrl as string} alt="" className="object-cover origin-center rounded-lg" fill={true}/>
                    </div> */}
                    <div className='lg:h-[320px] md:h-[280px] h-72 w-full bg-slate-400 rounded-xl shadow-lg flex content-center'>
                      card
                    </div>
                </SwiperSlide>
              ))
            }
    </Swiper>
  )
}


export default ServiceSwiper