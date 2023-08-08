import Image from "next/image"
import projects from "@/lib/projects"

type Props = {}

const ProjectCard = (props: Props) => {
  return (
    <article className="rounded-lg shadow-md w-full lg:min-w-[330px] my-6 mx-2 pb-6">
        <div className="relative w-full h-[220px] lg:h-[240px]">
            <Image src={projects[1].imageUrl} alt="project image" className="object-cover object-center rounded-t-lg" fill={true}/>
        </div>
        <table className="table-auto w-full ml-2 my-6">
            <tbody>
                <tr>
                    <td className="text-neutral-700 py-2 pl-2">Time</td>
                    <td className="pl-3 font-semibold text-neutral-800">2 - 3days</td>
                </tr>
                <tr>
                    <td className="text-neutral-700 py-2 pl-2">Price</td>
                    <td className="pl-3 font-semibold text-neutral-800">KES 40,000 - 60000</td>
                </tr>
                <tr>
                    <td className="text-neutral-700 py-2 pl-2">Workers</td>
                    <td className="pl-3 font-semibold text-neutral-800">3 welders</td>
                </tr>
            </tbody>
        </table>
        <div className="ml-4">
            <div className="flex mb-4">
                <div className="relative -mx-1 w-10 aspect-square border-2 border-neutral-50 rounded-full">
                    <Image src='https://james.paulmbatia.com/wp-content/uploads/2023/08/welder2.jpg' className="object-cover object-center rounded-full" alt="member1" fill={true}/>
                </div>
                <div className="relative -mx-1 w-10 aspect-square border-2 border-neutral-50 rounded-full">
                    <Image src='https://james.paulmbatia.com/wp-content/uploads/2023/08/welder3.jpg' className="object-cover object-center rounded-full" alt="member1" fill={true}/>
                </div>
                <div className="relative -mx-1 w-10 aspect-square border-2 border-neutral-50 rounded-full">
                    <Image src='https://james.paulmbatia.com/wp-content/uploads/2023/08/welder1.jpg' className="object-cover object-center rounded-full" alt="member1" fill={true}/>
                </div>
            </div>
            <h1 className="text-neutral-700 text-base">Build by <span className="text-neutral-800 underline underline-offset-2 mx-2">James</span><span className="text-neutral-800 underline underline-offset-2 mx-2">Paul</span><span className="text-neutral-800 underline underline-offset-2 mx-2">Antony</span></h1>
        </div>
    </article>
  )
}

export default ProjectCard