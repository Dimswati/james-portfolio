import { FaqFieldsFragment } from "@/gql/graphql"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"

import { Dispatch, SetStateAction } from "react"
import { twMerge } from "tailwind-merge"

type FAQProps = {
    show: boolean,
    faq: FaqFieldsFragment,
    setCurrentFaqId: Dispatch<SetStateAction<string | undefined>>
}

const FAQ: React.FC<FAQProps> = ({ show, faq, setCurrentFaqId }: FAQProps) => {
  return (
    <div className="mb-12">
        <div className="bg-neutral-100 h-[1px] w-full"></div>
        <div className="flex justify-between gap-x-6 text-2xl text-neutral-100 my-12 hover:cursor-pointer" onClick={()=>setCurrentFaqId(faq.id)}>
            <h4 className="capitalize">{faq.title}</h4>
            <span onClick={()=>setCurrentFaqId(faq.id)} className="cursor-pointer">{show ? <AiOutlineMinus/> : <AiOutlinePlus/>}</span>
        </div>
        <p className={twMerge("text-neutral-200 text-xl leading-9 font-light transition duration-200 ease-in-out", show ? 'block' : 'hidden')}>{faq.faqsFields?.faqAnswer as string}</p>
    </div>
  )
}

export default FAQ