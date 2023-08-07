import { getProjects } from "@/lib/server-utils"

const Projects = async() => {

  const data = await getProjects()

  console.log(data)
  
  return (
    <div>Projects</div>
  )
}

export default Projects