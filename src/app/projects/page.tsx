// actions
import { getCategoryWithProjects } from '@/lib/server-utils'


// Custom Components
import TopBar from '@/components/TopBar'


// Projects
import projects from '@/lib/projects'
import ProjectSection from '@/components/ProjectSection'

const Projects = async() => {

  const categories = await getCategoryWithProjects()

  if(categories === undefined || categories.length < 1) {
    return (
      <main>
        <section className='container'>Not Categories exist</section>
      </main>
    ) 
  }

  return (
    <main>
      <TopBar/>
      {
        categories.map(project => (
          <ProjectSection key={project.node.id} category={project.node}/>
        ))
      }
    </main>
  )
}

export default Projects