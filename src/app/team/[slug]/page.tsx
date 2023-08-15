import { getWelderBySlug, getProjectsByWelder } from "@/lib/server-utils"

import TopBar from "@/components/TopBar"
import ProjectCard from "@/components/ProjectCard"

import { notFound } from "next/navigation"
import Button from "@/components/Button"

import Image from "next/image"
import { BsWhatsapp } from "react-icons/bs"

type MemberProps = {
    params: {
        slug: string
    }
}

const Member = async({ params: { slug } }: MemberProps) => {

    const welder = await getWelderBySlug(slug)
    const projectlist = await getProjectsByWelder(slug)

    if(!welder) {
        return notFound()
    }   
    
    if(projectlist === undefined || !projectlist ) {
        return (
            <main>
                 <TopBar><h1 className="text-xl font-semibold">no projects found</h1></TopBar>
            </main>
        )
    }
    
    return (
    <main>
        <TopBar>
            <h1 className="text-xl font-semibold">{welder.title}</h1>
        </TopBar>
        <section className="container py-24">
            <div className="flex md:flex-row flex-col gap-y-12 gap-x-14 md:items-center">
                <div className="relative sm:w-72 sm:h-72 aspect-square sm:aspect-auto w-full flex-shrink-0">
                    <Image src={welder.featuredImage?.node.sourceUrl as string} alt={welder.title as string} fill={true} className="object-cover object-center rounded-lg"/>
                </div>
                <div>
                    <h4 className="text-2xl font-semibold text-neutral-800 font-inria-serif mb-8">{welder.title}</h4>
                    <p className="text-lg text-neutral-700 mb-8">{welder.teamFields?.aboutMember}</p>
                    <span className="text-neutral-700 font-bold">25 yrs in welding</span>
                    <button className='bg-transparent border px-8 py-2 rounded-full text-neutral-900 text-lg font-semibold hover:from-rose-900 hover:to-neutral-900 transition duration-300 border-green-800 w-full sm:w-fit block mt-8'><a href="https://wa.me/+254111338700" target='_blank' className='flex gap-x-4 items-center justify-center'><BsWhatsapp/>whatsapp</a></button>
                </div>
            </div>
        </section>
        <section className="container pb-20 overflow-hidden">
            <div className="overflow-x-hidden">
                <h4 className="relative text-2xl font-semibold after:absolute after:top-[50%] after:left-72 after:w-full after:h-[1px] after:bg-neutral-800">{welder.title} projects</h4>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-12 gap-y-8 py-16">
                {(projectlist.map(project => (
                <ProjectCard key={project?.id as string} project={project}/>
                )))}
            </div>
        </section>
    </main>
  )
}

export default Member