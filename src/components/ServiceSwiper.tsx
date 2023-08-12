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
          >
            {
              service.photos.map(photo => (
                <SwiperSlide key={photo?.id as string}>
                    <div className='lg:h-[320px] md:h-[280px] h-72 lg:w-[460px] md:w-[400px] rounded-xl shadow-lg flex content-center'>
                      <Image src={photo?.sourceUrl as string} alt="" className="object-cover origin-center rounded-lg" fill={true}/>
                    </div>
                </SwiperSlide>
              ))
            }
    </Swiper>
  )
}


export default ServiceSwiper