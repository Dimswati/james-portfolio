import Image from "next/image"
import profile from "../../public/james-profile.png" 

// React Icons
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa6'
import { IoCallOutline } from 'react-icons/io5'
import {BsChevronRight, BsChevronLeft  } from 'react-icons/bs'
import { TfiQuoteLeft, TfiQuoteRight } from 'react-icons/tfi'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { BsArrowUpRight } from 'react-icons/bs'
import ProjectSwiper from "@/components/ProjectSwiper"
import projects from "@/lib/projects"
import ProjectSection from "@/components/ProjectSection"
import FAQ from "@/components/FAQSection"

import ServiceSection from "@/components/ServiceSection"
import { getServices } from "@/lib/server-utils"

import { getCategoryWithProjects, getTeam, getFaqs } from "@/lib/server-utils"
import Link from "next/link"
import WelderCard from "@/components/WelderCard"
import FAQSection from "@/components/FAQSection"
import GalleryDrawer from "@/components/GalleryDrawer"

export default async function Home() {

  const categories = await getCategoryWithProjects()

  const team = await getTeam()

  const faqList = await getFaqs()

  const services = await getServices()

  return (
    <main>
      <section className="container lg:max-w-[80vw] flex md:flex-row flex-col gap-y-16 justify-between lg:gap-x-20 md:gap-x-12 items-center pb-16 pt-8">
        <div className="md:w-4/12 md:basis-4/12 w-full bg-neutral-50 shadow-md p-4 rounded-lg">
          <Image src={profile} alt="profile photo" className="object-cover object-center rounded-lg"/>
        </div>
        <div className="md:w-8/12 md:basis-8/12 w-full">
          <h3 className="uppercase text-neutral-500 text-xl font-medium mb-4">hi client, i am</h3>
          <h1 className="text-4xl font-bold mb-8 font-inria-serif">JAMES NZIMO</h1>
            <p className="text-xl leading-9 text-neutral-900 antialiased mb-12">An expert metal fabricator from Eldoret with over 5 years experience in gate designing, Metal Joining, Metal house building and much more..</p>
          <div className="flex md:flex-row flex-col items-center gap-x-8 gap-y-10">
            <button className="medium-btn-gradient md:w-fit w-full"><a href="tel:+254115152238" className="w-full block">Call me now</a></button>
            <Link href='projects' className="large-btn-outline-bottom-dark flex gap-x-6 items-center w-fit">view projects<BsArrowUpRight/></Link>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-b from-neutral-900 to-rose-900 pt-24 pb-16">
        <div className="container">
          <h2 className="text-4xl text-neutral-100 font-inria-serif text-center mb-4">My InDemand Services</h2>
          <p className="uppercase text-neutral-400 text-lg text-center lg:mb-32 md:mb-24 mb-20">here is what i can do for you</p>
          <div className='mx-auto overflow-x-hidden '>
            {services !== undefined ? services.map(service => (
              <ServiceSection key={service.node.id} service={service.node}/>
            )) : null}
          </div>
        </div>
      </section>
      <section className="pb-24">
        <div className="bg-gradient-to-b from-neutral-300 to-neutral-50 pb-12 pt-20">
          <div className="container">
            <h2 className="text-4xl text-neutral-800 font-inria-serif text-center mb-4">How I Do It</h2>
            <p className="uppercase text-neutral-700 text-lg text-center mb-16">motivated by Ecclesiastes 9:1-10</p>
            <div className="lg:max-w-[70vw] mx-auto text-center flex flex-col gap-y-6">
              <span className="text-3xl text-neutral-800"><TfiQuoteLeft/></span>
              <p className="text-xl text-neutral-800 leading-9">Whatever your hand finds to do, do with all your might, for there is no work nor planning nor knowledge nor wisdom in the Grave, where you are going</p>
              <span className="text-3xl text-neutral-800 self-end"><TfiQuoteRight/></span>
            </div>
          </div>
        </div>
        <div className="container lg:max-w-[75vw] py-20">
          <div className="flex md:flex-row flex-col mb-24 gap-x-16 gap-y-24">
            <div className="md:w-1/2 md:basis-1/2 w-full basis-full">
              <h2 className="text-2xl font-semibold text-neutral-800 mb-4">Step 1</h2>
              <p className="text-xl text-neutral-900 mb-8 leading-8">Just tell me about your project over phone call or whatsapp</p>
              <button className="medium-btn-gradient"><a href="tel:+254115152238" className="w-full block">Call me now</a></button>
            </div>
            <div className="md:w-1/2 md:basis-1/2 w-full basis-full">
              <h2 className="text-2xl font-semibold text-neutral-800 mb-4">Step 2</h2>
              <p className="text-xl text-neutral-900 leading-8">Most projects are done in two ways, either my clients bring their own materials or they live the entire process to me</p>
            </div>
          </div>
          <h3 className="text-xl text-center font-semibold mb-20"><span className="text-neutral-600">choice A:</span> Bring your own Materials</h3>
          <div className="flex md:flex-row flex-col gap-y-16 lg:gap-x-16 md:gap-x-12 mb-24">
            <div className="relative h-80 md:basis-1/2"><Image src='https://james.paulmbatia.com/wp-content/uploads/2023/08/stable-diffusion-xl-8.jpg' alt="" className="object-cover origin-center rounded-md" fill={true}/></div>
            <p className="text-lg leading-8 text-neutral-800 md:w-1/2 md:basis-1/2 w-full basis-full md:mt-6 mt-0">For this I will only charge you 30% of the project cost. Here you will need to search for the right metals from your trusted supplier</p>
          </div>
          <h3 className="text-xl text-center font-semibold mb-20"><span className="text-neutral-600">Choice B:</span> Let me handle the hard stuff for you</h3>
          <div className="flex md:flex-row-reverse flex-col gap-y-16 gap-x-16 mb-24">
            <div className="relative h-80 md:basis-1/2"><Image src='https://james.paulmbatia.com/wp-content/uploads/2023/08/stable-diffusion-xl-12.jpg' alt="" className="object-cover origin-center rounded-md" fill={true}/></div>
            <p className="text-lg leading-8 text-neutral-800 md:w-1/2 md:basis-1/2 w-full basis-full md:mt-6 mt-0">70% of my client prefer this way Lets agree on the project cost I will handle the rest</p>
          </div>
          <div className="flex">
            <div className="md:w-1/2 md:basis-1/2 w-full basis-full">
              <h2 className="text-2xl font-semibold text-neutral-800 mb-4">Step 3</h2>
              <p className="text-xl text-neutral-900 mb-8">That`s it, lets just sign a contract</p>
              <button className="medium-btn-outline-dark"><a href="tel:+254115152238" className="w-full block">Call me</a></button>
            </div>
          </div>
        </div>
      </section>
      <FAQSection faqs={faqList}/>
      <section className="pb-20">
        <div className="bg-gradient-to-b from-neutral-300 to-neutral-50 pb-12 pt-24 mb-24">
          <h2 className="text-4xl text-neutral-800 font-inria-serif text-center mb-4">My Past Work</h2>
          <p className="uppercase text-neutral-700 text-lg text-center">what i will build for you</p>
        </div>
        {categories !== undefined ? (
          categories.map(category => (
            <ProjectSection key={category.node.id} category={category.node}/>
          ))
        ) : null}
        <div className="container flex flex-col items-center">
          <h4 className="text-2xl text-neutral-800 text-center font-bold mb-8 leading-9">I do them all with my youthful enthusiasm and ultimate customer satisfaction</h4>
          <button className="medium-btn-gradient w-fit mb-12">call me now</button>
          <p className="text-neutral-500">Customer reviews coming here soon</p>
        </div>
      </section>
      <section className=" bg-gradient-to-b from-neutral-900 to-rose-900 pt-24 py-20">
        <h2 className="container text-4xl text-neutral-100 font-inria-serif text-center mb-12">Team JJ</h2>
        <p className="container uppercase text-neutral-300 text-lg text-center leading-9 mb-32">with A team of over 40years Experience in welding <br/> you are assured of what you will get</p>
        <div className="container grid gap-x-12 gap-y-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {team !== undefined ? (team.map(welder => (
            <WelderCard key={welder.node.id} welder={welder.node}/>
          ))) : null}
        </div>
      </section>
      {/* <GalleryDrawer/> */}
    </main>
  )
}
