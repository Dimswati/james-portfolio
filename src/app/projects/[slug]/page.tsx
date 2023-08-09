import ProjectCard from "@/components/ProjectCard"
import TopBar from "@/components/TopBar"
import { getProjectsByCategory } from "@/lib/server-utils"
import { notFound } from "next/navigation"
import React from "react"

type ProjectsPageParams = {
  params: {
    slug: string
  }
}

const Projects = async({ params: { slug } }: ProjectsPageParams) => {

  const category = await getProjectsByCategory(slug)

  if(!category) {
    return notFound()
  }

  const projects = category.projects?.edges 

  if(projects === undefined || projects.length < 1){
    return (
      <main>
        <h2>No projects exist. Add new {category.name} if you are the administrator</h2>
      </main>
    )
  }

  return (
    <main>
      <TopBar showButton={true}>
        <h1 className="text-xl font-semibold">{category.name}</h1>
      </TopBar>
      <section className="container py-20 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12">
        {(projects.map(project => (
          <ProjectCard project={project.node}/>
        )))}
      </section>
    </main>
  )
}

export default Projects