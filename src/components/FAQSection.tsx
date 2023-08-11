'use client'

import { FaqListQuery } from "@/gql/graphql"
// learn
import { useSuspenseQuery, UseSuspenseQueryResult } from "@apollo/client"

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import FAQ from "./FAQ"
import { useState } from "react"

type FAQSectionProps = {
    faqs: FaqListQuery | undefined
}

const FAQSection: React.FC<FAQSectionProps> = ({ faqs }) => {

  const faqList = faqs?.fAQs?.edges

  if(faqList === undefined){
    return null
  }

  const [ currentFaqId, setCurrentFaqId ] = useState<string>(faqList[0].node.id)

  return (
    <section className="bg-gradient-to-b from-neutral-900 to-rose-900 py-24">
        <div className="container">
          <h2 className="text-4xl text-neutral-100 font-inria-serif text-center mb-20">Having Questions?</h2>
          <div className="flex flex-col gap-y-12">
            <button className="medium-btn-outline-light text-center w-fit mx-auto mb-32"><a href="tel:+254115152238" className="w-full block">Call me now</a></button>
          </div>
          <div className="lg:max-w-[75vw] mx-auto">
            {/* <div className="mb-12">
              <div className="bg-neutral-100 h-[1px] w-full"></div>
              <div className="flex justify-between gap-x-6 items-center text-2xl text-neutral-100 my-12">
                <h4 className="capitalize">Is there a down payment</h4>
                <span><AiOutlineMinus/></span>
              </div>
              <p className="text-neutral-200 text-lg font-light">Depending on which you like, you can decide either to bring your own materials or live the entire process to me</p>
            </div> */}
            {faqList.map(faq => (
              <FAQ faq={faq.node} show={currentFaqId === faq.node.id ? true : false} setCurrentFaqId={setCurrentFaqId}/>
            ))}
            {/* <div className="mb-12">
              <div className="bg-neutral-100 h-[1px] w-full"></div>
              <div className="flex justify-between gap-x-6 items-center text-2xl text-neutral-100 my-12">
                <h4 className="capitalize">Is there a down payment</h4>
                <span><AiOutlinePlus/></span>
              </div>
              <p className="text-neutral-200 text-lg font-light hidden">Depending on which you like, you can decide either to bring your own materials or live the entire process to me</p>
            </div>
            <div className="mb-12">
              <div className="bg-neutral-100 h-[1px] w-full"></div>
              <div className="flex justify-between gap-x-6 items-center text-2xl text-neutral-100 my-12">
                <h4 className="capitalize">Is there a down payment</h4>
                <span><AiOutlinePlus/></span>
              </div>
              <p className="text-neutral-200 text-lg font-light hidden">Depending on which you like, you can decide either to bring your own materials or live the entire process to me</p>
            </div>
            <div className="mb-12">
              <div className="bg-neutral-100 h-[1px] w-full"></div>
              <div className="flex justify-between gap-x-6 items-center text-2xl text-neutral-100 my-12">
                <h4 className="capitalize">Is there a down payment</h4>
                <span><AiOutlinePlus/></span>
              </div>
              <p className="text-neutral-200 text-lg font-light hidden">Depending on which you like, you can decide either to bring your own materials or live the entire process to me</p>
            </div>
            <div className="mb-12">
              <div className="bg-neutral-100 h-[1px] w-full"></div>
              <div className="flex justify-between gap-x-6 items-center text-2xl text-neutral-100 my-12">
                <h4 className="capitalize">Is there a down payment</h4>
                <span><AiOutlinePlus/></span>
              </div>
              <p className="text-neutral-200 text-lg font-light hidden">Depending on which you like, you can decide either to bring your own materials or live the entire process to me</p>
            </div> */}
          </div>
        </div>
      </section>
  )
}

export default FAQSection