'use client'

import React from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';
import { type Swiper as SwiperRef } from 'swiper/types'

import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/bundle';

import projects from '@/lib/projects';

type Props = {}

const DisplayProjects: React.FC = () => {
  return (
    <Swiper
        modules={[]}
        freeMode={true}
        centeredSlides={true}
        loop={true}
        spaceBetween={0}
        speed={1000}
        breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              }, 
              1024: {
                slidesPerView: 3,
              }
            }}
            // autoplay={{
            //   delay: 2000,
            //   disableOnInteraction: false
            // }}
          >
            {
              projects.map(project => (
                <SwiperSlide key={project.id}>
                  <div className='h-[260px] w-[360px] bg-no-repeat bg-center bg-cover rounded-md flex' style={{backgroundImage: `url(${project.imageUrl})`}}>
                    <div className='bg-gradient-to-t from-neutral-900 to-transparent h-fit w-full self-end pt-20 pb-4 pl-4 rounded-b-md'>
                        <h4 className='text-neutral-200 text-xl mb-2'>{project.title}</h4>
                        <span className='text-neutral-400 font-bold'>12 march 2023</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            }
    </Swiper>
  )
}

export default DisplayProjects