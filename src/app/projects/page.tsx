import { getProjects } from "@/lib/server-utils"


//React Icons
import { BsArrowLeft } from "react-icons/bs"

const Projects = async() => {

  const data = await getProjects()

  console.log(data)
  
  return (
    <main>
      <div className="container border-b border-neutral-200">
        <button className="flex items-center gap-x-6">
          <BsArrowLeft/>
          <span>back</span>
        </button>
      </div>
    </main>
  )
}

export default Projects