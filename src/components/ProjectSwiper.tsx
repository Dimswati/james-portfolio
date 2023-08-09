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
import { ProjectListFragment } from '@/gql/graphql';

type ProjectSliderProps = {
  instance?: MutableRefObject<SwiperRef>
  projects: ProjectListFragment | null
}

const ProjectSwiper: React.FC<ProjectSliderProps> = ({ projects, instance }) => {

  if(!projects) {
    return null
  }

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
              projects.edges.map(project => (
                <SwiperSlide key={project.node.id} className='px-1'>
                  <ProjectCard project={project.node}/>
                </SwiperSlide>
              ))
            }
    </Swiper>
  )
}


export default ProjectSwiper