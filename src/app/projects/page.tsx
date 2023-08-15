// actions
import { getCategoryWithProjects } from '@/lib/server-utils'


// Custom Components
import TopBar from '@/components/TopBar'


// Projects
import projects from '@/lib/projects'
import ProjectSection from '@/components/ProjectSection'
import { notFound } from 'next/navigation'
import GalleryDrawer from '@/components/GalleryDrawer'
import Link from 'next/link'

const Projects = async() => {

  const categories = await getCategoryWithProjects()

  if(categories === undefined || categories.length < 1) {
    return notFound()
  }

  return (
    <main>
      <TopBar>
        <Link href='/team' className='medium-btn-outline-dark'>
          team
        </Link>
      </TopBar>
      {
        categories.map(project => (
          <ProjectSection key={project.node.id} category={project.node}/>
        ))
      }
    </main>
  )
}

export default Projects