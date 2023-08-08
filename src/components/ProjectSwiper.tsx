'use client'

import React from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';
import { type Swiper as SwiperRef } from 'swiper/types'

import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/bundle';

import projectList from '@/lib/projects';

type ProjectSliderProps = {
  projects: typeof projectList
}

const ProjectSwiper: React.FC<ProjectSliderProps> = ({ projects }) => {
  return (
    <Swiper
        modules={[]}
        freeMode={true}
        centeredSlides={false}
        loop={true}
        spaceBetween={30}
        speed={600}
        breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40
              }, 
              1024: {
                slidesPerView: 3,
                spaceBetween: 80
              }
            }}
            // autoplay={{
            //   delay: 2000,
            //   disableOnInteraction: true
            // }} 
            className=' bg-slate-300 min-w-full' 
          >
            {
              projects.map(project => (
                <SwiperSlide key={project.id}>
                  <div className='lg:h-[300px] lg:w-[400px] md:h-[260px] md:w-[360px] w-full h-[300px] bg-no-repeat bg-center bg-cover rounded-md flex' style={{backgroundImage: `url(${project.imageUrl})`}}>
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

export default ProjectSwiper