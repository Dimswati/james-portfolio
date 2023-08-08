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
    <main>
      <TopBar/>
      <ProjectSection/>
      <ProjectSection/>
      <ProjectSection/>
    </main>
  )
}

export default Projects