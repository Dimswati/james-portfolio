import Image from "next/image"
import projects from "@/lib/projects"
import React from "react"

import { ProjectFieldsFragment } from "@/gql/graphql"
import Welders from "./Welders"

type ProjectCardProps = {
    project: ProjectFieldsFragment
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    project
}) => {

    const welders = project.projectFields?.projectmembersrelationship

  return (
    <article className="rounded-lg shadow-md w-full lg:min-w-[330px] my-6 pb-2 bg-slate-50">
        <div className="relative w-full h-[220px] lg:h-[240px]">
            <Image src={project.featuredImage?.node.sourceUrl as string} alt="project image" className="object-cover object-center rounded-t-lg" fill={true}/>
        </div>
        <div className="my-6 mx-6">
            <table className="table-auto w-full">
                <tbody>
                    <tr>
                        <td className="text-neutral-700 py-2">Time</td>
                        <td className="pl-3 font-semibold text-neutral-800">{project.projectFields?.time} {project.projectFields?.timeFormat}</td>
                    </tr>
                    <tr>
                        <td className="text-neutral-700 py-2">Price</td>
                        <td className="pl-3 font-semibold text-neutral-800">KES {project.projectFields?.cost}</td>
                    </tr>
                    <tr>
                        <td className="text-neutral-700 py-2">Workers</td>
                        <td className="pl-3 font-semibold text-neutral-800">{project.projectFields?.projectmembersrelationship?.length} welders</td>
                    </tr>
                </tbody>
            </table>
            <Welders welders={welders}/>
            <button className="medium-btn-outline-dark w-full mt-3">
                <a href="tel:+254115152238" className="w-full block">Request Quotation</a>
            </button>
        </div>
    </article>
  )
}

export default ProjectCard