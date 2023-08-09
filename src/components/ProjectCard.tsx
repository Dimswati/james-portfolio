import Image from "next/image"
import projects from "@/lib/projects"
import React from "react"

import { ProjectFieldsFragment } from "@/gql/graphql"

type ProjectCardProps = {
    project: ProjectFieldsFragment
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    project
}) => {

    const welders = project.projectFields?.projectmembersrelationship

  return (
    <article className="rounded-lg shadow-md w-full lg:min-w-[330px] my-6 pb-6">
        <div className="relative w-full h-[220px] lg:h-[240px]">
            <Image src={project.featuredImage?.node.sourceUrl as string} alt="project image" className="object-cover object-center rounded-t-lg" fill={true}/>
        </div>
        <table className="table-auto w-full ml-2 my-6">
            <tbody>
                <tr>
                    <td className="text-neutral-700 py-2 pl-2">Time</td>
                    <td className="pl-3 font-semibold text-neutral-800">{project.projectFields?.time} {project.projectFields?.timeFormat}</td>
                </tr>
                <tr>
                    <td className="text-neutral-700 py-2 pl-2">Price</td>
                    <td className="pl-3 font-semibold text-neutral-800">KES {project.projectFields?.cost}</td>
                </tr>
                <tr>
                    <td className="text-neutral-700 py-2 pl-2">Workers</td>
                    <td className="pl-3 font-semibold text-neutral-800">{project.projectFields?.projectmembersrelationship?.length} welders</td>
                </tr>
            </tbody>
        </table>
        <div className="ml-4">
            <div className="flex mb-4">
                {welders?.map(welder => (
                    <div key={welder?.id as string} className="relative -mx-1 w-10 aspect-square border-2 border-neutral-50 rounded-full">
                    <Image src={welder?.featuredImage?.node.sourceUrl as string} className="object-cover object-center rounded-full" alt="member1" fill={true}/>
                    </div>
                ))}
            </div>
            <h1 className="text-neutral-700 text-base">Build by {welders?.map(welder => (
                <span key={welder?.id as string} className="text-neutral-800 underline underline-offset-2 mx-2">{welder?.title}</span>
            ))}</h1>
        </div>
    </article>
  )
}

export default ProjectCard