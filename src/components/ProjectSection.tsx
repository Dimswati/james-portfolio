import ProjectSwiper from "./ProjectSwiper"
import projects from "@/lib/projects"

// React Icons
import { BsArrowUpRight, BsChevronLeft, BsChevronRight } from 'react-icons/bs'

const ProjectSection = () => {
  return (
    <>
        <div className="flex gap-x-12 justify-between items-center mb-20">
          <div className="text-lg text-neutral-800">
            <h3 className="text-3xl font-semibold text-neutral-900 mb-8">Gates</h3>
            <p className="lg:max-w-[50vw]">Here is are the kind of gates build by my team and I</p>
          </div>
          </div>
          <div className="mb-12">
            <ProjectSwiper projects={projects}/>
          </div>
          <div className="flex items-center justify-between">
            <button className="large-btn-outline-bottom-dark flex gap-x-6 items-center">view projects<BsArrowUpRight/></button>
            <div className="flex gap-x-4 items-center">
              <button className="text-neutral-800 text-xl md:p-4 p-3 border border-neutral-800 rounded-full"><BsChevronLeft/></button>
              <button className="text-neutral-800 text-xl md:p-4 p-3 border border-neutral-800 rounded-full"><BsChevronRight/></button>
            </div>
          </div>
    </>
  )
}

export default ProjectSection