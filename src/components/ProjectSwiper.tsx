'use client'

import React, { useRef , MutableRefObject} from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';

import { type Swiper as SwiperRef } from 'swiper/types'

import ProjectCard from './ProjectCard';

import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/bundle';

import projectList from '@/lib/projects';

type ProjectSliderProps = {
  instance?: MutableRefObject<SwiperRef>
  projects: typeof projectList
}

const ProjectSwiper: React.FC<ProjectSliderProps> = ({ projects, instance }) => {

  return (
    <Swiper
        modules={[Autoplay]}
        freeMode={true}
        centeredSlides={false}
        loop={true}
        spaceBetween={20}
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

              1124: {
                slidesPerView: 3,
                spaceBetween: 40
              }
            }}
            onInit={(swiper)=>{
              if(instance){
                console.log(swiper)
                instance.current = swiper
              }
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true
            }} 
            className='min-w-full' 
          >
            {
              projects.map(project => (
                <SwiperSlide key={project.id} className='px-2'>
                  <ProjectCard/>
                </SwiperSlide>
              ))
            }
    </Swiper>
  )
}


export default ProjectSwiper