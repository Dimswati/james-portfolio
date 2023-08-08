import { BsArrowLeft } from 'react-icons/bs'

import { getProjects } from "@/lib/server-utils"


// Custom Components
import TopBar from '@/components/TopBar'


// Projects
import projects from '@/lib/projects'
import ProjectSection from '@/components/ProjectSection'

const Projects = async() => {

  // const data = await getProjects()

  return (
    <main className="bg-neutral-50 font-rubik">
      <TopBar/>
      <section className='container grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
        <ProjectSection/>
        <ProjectSection/>
        <ProjectSection/>
      </section>
    </main>
  )
}

export default Projects