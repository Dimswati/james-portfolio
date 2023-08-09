'use client'

import ProjectSwiper from "./ProjectSwiper"
import projects from "@/lib/projects"

import { useRef } from "react"

import { type Swiper as SwiperRef } from 'swiper/types'

// React Icons
import { BsArrowUpRight, BsChevronLeft, BsChevronRight } from 'react-icons/bs'


// import { FragmentType, useFragment } from "@/gql"
import { CategoryFieldsFragment } from "@/gql/graphql"

type ProjectSectionProps = {
  category: CategoryFieldsFragment
}

const ProjectSection: React.FC<ProjectSectionProps> = ({
  category
}) => {

  const swiperInstance = useRef<SwiperRef>() 

  const instance = swiperInstance as { current: SwiperRef }

  return (
    <section className="container py-16">
          <div className="flex gap-x-12 justify-between items-center mb-12">
            <div className="text-lg text-neutral-800">
              <h3 className="text-3xl font-semibold text-neutral-900 mb-8">{category.name}</h3>
              <p className="lg:max-w-[50vw]">Here is are the kind of {category.name} build by my team and I</p>
            </div>
          </div>
          <div className="mb-12">
            <ProjectSwiper projects={category.projects} instance={instance}/>
          </div>
          <div className="flex items-center justify-between">
            <button className="large-btn-outline-bottom-dark flex gap-x-6 items-center">view projects<BsArrowUpRight/></button>
            <div className="flex gap-x-4 items-center">
              <button className="text-neutral-800 text-xl md:p-4 p-3 border border-neutral-800 rounded-full" onClick={()=>instance.current.slidePrev()}><BsChevronLeft/></button>
              <button className="text-neutral-800 text-xl md:p-4 p-3 border border-neutral-800 rounded-full" onClick={()=>instance.current.slideNext()}><BsChevronRight/></button>
            </div>
          </div>
    </section>
  )
}

export default ProjectSection