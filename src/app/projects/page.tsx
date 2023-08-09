// actions
import { getProjectsByCategory } from '@/lib/server-utils'


// Custom Components
import TopBar from '@/components/TopBar'


// Projects
import projects from '@/lib/projects'
import ProjectSection from '@/components/ProjectSection'

const Projects = async() => {

  const projects = await getProjectsByCategory()

  console.log(projects)

  if(!projects) {
    return (
      <main>
        <section className='container'>Not Found</section>
      </main>
    ) 
  }

  return (
    <main>
      <TopBar/>
      {
        projects.map(project => (
          <ProjectSection key={project.node.id} category={project.node}/>
        ))
      }
    </main>
  )
}

export default Projects