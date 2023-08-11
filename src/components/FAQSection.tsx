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

  const [ currentFaqId, setCurrentFaqId ] = useState(faqs?.fAQs?.edges[0].node.id)

  const faqList = faqs?.fAQs?.edges

  if(faqList === undefined){
    return null
  }


  return (
    <section className="bg-gradient-to-b from-neutral-900 to-rose-900 py-24">
        <div className="container">
          <h2 className="text-4xl text-neutral-100 font-inria-serif text-center mb-20">Having Questions?</h2>
          <div className="flex flex-col gap-y-12">
            <button className="medium-btn-outline-light text-center w-fit mx-auto mb-32"><a href="tel:+254115152238" className="w-full block">Call me now</a></button>
          </div>
          <div className="lg:max-w-[75vw] mx-auto">
            {faqList.map(faq => (
              <FAQ key={faq.node.id} faq={faq.node} show={currentFaqId === faq.node.id ? true : false} setCurrentFaqId={setCurrentFaqId}/>
            ))}
          </div>
        </div>
      </section>
  )
}

export default FAQSection