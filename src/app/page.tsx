import Image from "next/image"
import profile from "../../public/james-profile.png" 

// React Icons
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa6'
import { IoCallOutline } from 'react-icons/io5'
import {BsChevronRight, BsChevronLeft  } from 'react-icons/bs'
import { TfiQuoteLeft, TfiQuoteRight } from 'react-icons/tfi'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { BsArrowUpRight } from 'react-icons/bs'
import DisplayProjects from "@/components/DisplayProjects"
import projects from "@/lib/projects"

export default function Home() {
  return (
    <main className="bg-neutral-50 font-rubik">
      <section className="container flex justify-between gap-6 items-center pb-16">
        <div className="w-4/12 basis-4/12">
          <Image src={profile} alt="profile photo" className="object-cover"/>
        </div>
        <div className="w-6/12 basis-6/12">
          <h3 className="uppercase text-neutral-500 text-xl font-medium mb-4">hi client, i am</h3>
          <h1 className="text-4xl font-bold mb-6 font-inria-serif">JAMES NZIMO</h1>
            <p className="text-xl leading-9 text-neutral-900 antialiased mb-8">An expert metal fabricator from Eldoret with over 5 years experience in gate designing, Metal Joining, Metal house building and much more..</p>
          <div className="flex gap-x-6 gap-y-4">
            <button className="medium-btn-gradient">Call me now</button>
            <button className="medium-btn-outline">Browse my work</button>
          </div>
        </div>
        <div className="w-2/12 basis-2/12 flex">
          <div className="flex flex-col gap-y-4 ml-auto relative before:bg-rose-900/50 before:absolute before:w-[2px] before:h-24 before:-top-28 before:right-[50%]">
            <span className="icon"><FaFacebookF/></span>
            <span className="icon"><FaTwitter/></span>
            <span className="icon"><FaInstagram/></span>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-b from-neutral-900 to-rose-900 py-24">
        <div className="container">
          <h2 className="text-4xl text-neutral-100 font-inria-serif text-center mb-4">My InDemand Services</h2>
          <p className="uppercase text-rose-400/50 text-lg text-center">here is what i can do for you</p>
          <div className="lg:max-w-[75vw] mx-auto mt-32">
            <div className="flex gap-x-20 mb-24 overflow-x-hidden">
              <div>
                <div className="relative h-80 mb-24 w-[400px]">
                  <Image src='http://a.ourhtmldemo.com/decorators/wp-content/uploads/2016/11/service-image-1.jpg' alt="" className="object-cover origin-center rounded-md" fill={true}/>
                </div> 
                <div className="flex gap-x-4 relative w-fit after:absolute after:top-[50%] after:left-48 after:w-[90vw] after:h-[1px] after:bg-neutral-100">
                  <button className="text-neutral-100 text-xl p-4 border border-neutral-100 rounded-full"><BsChevronLeft/></button>
                  <button className="text-neutral-100 text-xl p-4 border border-neutral-100 rounded-full"><BsChevronRight/></button>
                </div>
              </div>
              <div className="mt-16">
                <h4 className="text-3xl text-neutral-100 font-inria-serif mb-8">Gate Designing and Construction</h4>
                <p className="text-lg text-neutral-300 mb-12">From as low as 600,000/= up to 5million</p>
                <button className="medium-btn-outline-light flex gap-x-4 items-center"><IoCallOutline/><span>Request Quotation</span></button>
              </div>
            </div>
            <div className="flex flex-row-reverse gap-x-20 justify-between mb-24 overflow-x-hidden">
              <div>
                <div className="relative h-80 mb-24 w-[400px]">
                  <Image src='http://a.ourhtmldemo.com/decorators/wp-content/uploads/2016/11/service-image-1.jpg' alt="" className="object-cover origin-center rounded-md" fill={true}/>
                </div> 
                <div className="flex gap-x-4 relative after:absolute after:top-[50%] after:right-48 after:w-[90vw] after:h-[1px] after:bg-neutral-100 justify-end">
                  <button className="text-neutral-100 text-xl p-4 border border-neutral-100 rounded-full"><BsChevronLeft/></button>
                  <button className="text-neutral-100 text-xl p-4 border border-neutral-100 rounded-full"><BsChevronRight/></button>
                </div>
              </div>
              <div className="mt-16">
                <h4 className="text-3xl text-neutral-100 font-inria-serif mb-8">Gate Designing and Construction</h4>
                <p className="text-lg text-neutral-300 mb-12">From as low as 600,000/= up to 5million</p>
                <button className="medium-btn-outline-light flex gap-x-4 items-center"><IoCallOutline/><span>Request Quotation</span></button>
              </div>
            </div>
            <div className="flex gap-x-20 overflow-x-hidden">
              <div>
                <div className="relative h-80 mb-24 w-[400px]">
                  <Image src='http://a.ourhtmldemo.com/decorators/wp-content/uploads/2016/11/service-image-1.jpg' alt="" className="object-cover origin-center rounded-md" fill={true}/>
                </div> 
                <div className="flex gap-x-4 relative w-fit after:absolute after:top-[50%] after:left-48 after:w-[90vw] after:h-[1px] after:bg-neutral-100">
                  <button className="text-neutral-100 text-xl p-4 border border-neutral-100 rounded-full"><BsChevronLeft/></button>
                  <button className="text-neutral-100 text-xl p-4 border border-neutral-100 rounded-full"><BsChevronRight/></button>
                </div>
              </div>
              <div className="mt-16">
                <h4 className="text-3xl text-neutral-100 font-inria-serif mb-8">Gate Designing and Construction</h4>
                <p className="text-lg text-neutral-300 mb-12">From as low as 600,000/= up to 5million</p>
                <button className="medium-btn-outline-light flex gap-x-4 items-center"><IoCallOutline/><span>Request Quotation</span></button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-24">
        <div className="bg-gradient-to-b from-neutral-300 to-neutral-50 pb-12 pt-20">
          <h2 className="text-4xl text-neutral-800 font-inria-serif text-center mb-4">How I Do It</h2>
          <p className="uppercase text-neutral-700 text-lg text-center">motivated by Ecclesiastes 9:1-10</p>
          <div className="lg:max-w-[70vw] mx-auto text-center flex flex-col gap-y-6">
            <span className="text-3xl text-neutral-800"><TfiQuoteLeft/></span>
            <p className="text-xl text-neutral-800 leading-9">Whatever your hand finds to do, do with all your might, for there is no work nor planning nor knowledge nor wisdom in the Grave, where you are going</p>
            <span className="text-3xl text-neutral-800 self-end"><TfiQuoteRight/></span>
          </div>
        </div>
        <div className="container lg:max-w-[75vw] py-20">
          <div className="flex mb-24">
            <div className="w-1/2 basis-1/2 ">
              <h2 className="text-2xl font-semibold text-neutral-800 mb-4">Step 1</h2>
              <p className="text-lg text-neutral-900 mb-8">Just tell me about your project over phone call or whatsapp</p>
              <button className="medium-btn-gradient">Call me now</button>
            </div>
            <div className="w-1/2 basis-1/2">
              <h2 className="text-2xl font-semibold text-neutral-800 mb-4">Step 2</h2>
              <p className="text-lg text-neutral-900">Most projects are done in two ways, either my clients bring their own materials or they live the entire process to me</p>
            </div>
          </div>
          <h3 className="text-xl text-center font-semibold mb-20"><span className="text-neutral-600">choice A:</span> Bring your own Materials</h3>
          <div className="flex gap-x-16 mb-24">
            <div className="relative w-96 h-80 w-1/2 basis-1/2"><Image src='http://a.ourhtmldemo.com/decorators/wp-content/uploads/2016/11/service-image-1.jpg' alt="" className="object-cover origin-center rounded-md" fill={true}/></div>
            <p className="text-lg leading-8 text-neutral-800 w-1/2 basis-1/2 mt-6">For this I will only charge you 30% of the project cost. Here you will need to search for the right metals from your trusted supplier</p>
          </div>
          <h3 className="text-xl text-center font-semibold mb-20"><span className="text-neutral-600">Choice B:</span> Let me handle the hard stuff for you</h3>
          <div className="flex flex-row-reverse gap-x-16 mb-24">
            <div className="relative w-96 h-80 w-1/2 basis-1/2"><Image src='http://a.ourhtmldemo.com/decorators/wp-content/uploads/2016/11/service-image-1.jpg' alt="" className="object-cover origin-center rounded-md" fill={true}/></div>
            <p className="text-lg leading-8 text-neutral-800 w-1/2 basis-1/2 mt-6">70% of my client prefer this way Lets agree on the project cost I will handle the rest</p>
          </div>
          <div className="flex">
            <div className="w-1/2 basis-1/2">
              <h2 className="text-2xl font-semibold text-neutral-800 mb-4">Step 4</h2>
              <p className="text-lg text-neutral-900 mb-8">Just tell me about your project over phone call or whatsapp</p>
              <button className="medium-btn-gradient">Call me now</button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-b from-neutral-900 to-rose-900 py-24">
        <div className="container">
          <h2 className="text-4xl text-neutral-100 font-inria-serif text-center mb-20">Having Questions?</h2>
          <div className="flex flex-col gap-y-12">
            <button className="medium-btn-outline-light text-center w-fit mx-auto mb-32">call me now</button>
          </div>
          <div className="lg:max-w-[75vw] mx-auto">
            <div className="mb-12">
              {/* <div className="bg-neutral-100 h-[1px] w-full"></div> */}
              <div className="flex justify-between items-center text-2xl text-neutral-100 my-12">
                <h4 className="capitalize">Is there a down payment</h4>
                <span><AiOutlineMinus/></span>
              </div>
              <p className="text-neutral-200 text-lg font-light">Depending on which you like, you can decide either to bring your own materials or live the entire process to me</p>
            </div>
            <div className="mb-12">
              <div className="bg-neutral-100 h-[1px] w-full"></div>
              <div className="flex justify-between items-center text-2xl text-neutral-100 my-12">
                <h4 className="capitalize">Is there a down payment</h4>
                <span><AiOutlinePlus/></span>
              </div>
              <p className="text-neutral-200 text-lg font-light hidden">Depending on which you like, you can decide either to bring your own materials or live the entire process to me</p>
            </div>
            <div className="mb-12">
              <div className="bg-neutral-100 h-[1px] w-full"></div>
              <div className="flex justify-between items-center text-2xl text-neutral-100 my-12">
                <h4 className="capitalize">Is there a down payment</h4>
                <span><AiOutlinePlus/></span>
              </div>
              <p className="text-neutral-200 text-lg font-light hidden">Depending on which you like, you can decide either to bring your own materials or live the entire process to me</p>
            </div>
            <div className="mb-12">
              <div className="bg-neutral-100 h-[1px] w-full"></div>
              <div className="flex justify-between items-center text-2xl text-neutral-100 my-12">
                <h4 className="capitalize">Is there a down payment</h4>
                <span><AiOutlinePlus/></span>
              </div>
              <p className="text-neutral-200 text-lg font-light hidden">Depending on which you like, you can decide either to bring your own materials or live the entire process to me</p>
            </div>
            <div className="mb-12">
              <div className="bg-neutral-100 h-[1px] w-full"></div>
              <div className="flex justify-between items-center text-2xl text-neutral-100 my-12">
                <h4 className="capitalize">Is there a down payment</h4>
                <span><AiOutlinePlus/></span>
              </div>
              <p className="text-neutral-200 text-lg font-light hidden">Depending on which you like, you can decide either to bring your own materials or live the entire process to me</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-gradient-to-b from-neutral-300 to-neutral-50 pb-12 pt-20">
          <h2 className="text-4xl text-neutral-800 font-inria-serif text-center mb-4">My Past Work</h2>
          <p className="uppercase text-neutral-700 text-lg text-center">what i will build for you</p>
        </div>
        <div className="container py-20">
          <div className="flex gap-x-12 justify-between items-center">
            <div className="text-lg text-neutral-800">
              <h3 className="text-3xl font-semibold text-neutral-900 mb-8">Grills</h3>
              <p className="lg:max-w-[50vw]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum dicta maiores sunt repudiandae veritatis repellendus nihil, quas suscipit dolores inventore.</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="flex gap-x-8 overflow-x-auto scrollbar-hide mb-16">
            {projects.map(project => (
              <div key={project.id} style={{backgroundImage: `url(${project.imageUrl})`}} className="h-[300px] w-[400px] bg-no-repeat bg-center bg-cover flex flex-shrink-0 rounded-lg transition duration-300">
                <div className='bg-gradient-to-t from-neutral-900 to-transparent h-fit w-full self-end pt-20 pb-4 pl-4 rounded-b-lg'>
                  <h4 className='text-neutral-200 text-xl mb-4'>{project.title}</h4>
                  <span className='uppercase text-neutral-400 font-bold'>12 march 2023</span>
                </div>
              </div>
            ))}
          </div>
          <button className="medium-btn-outline-bottom-dark flex gap-x-4 items-center">view projects<BsArrowUpRight/></button>
        </div>
        <div className="container py-20">
          <div className="flex gap-x-12 justify-between items-center">
            <div className="text-lg text-neutral-800">
              <h3 className="text-3xl font-semibold text-neutral-900 mb-8">Gates</h3>
              <p className="lg:max-w-[50vw]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum dicta maiores sunt repudiandae veritatis repellendus nihil, quas suscipit dolores inventore.</p>
            </div>
          </div>
        </div>
        <div className="container mb-16">
          <div className="flex gap-x-8 overflow-x-auto scrollbar-hide mb-16">
            {projects.map(project => (
              <div key={project.id} style={{backgroundImage: `url(${project.imageUrl})`}} className="h-[300px] w-[400px] bg-no-repeat bg-center bg-cover flex flex-shrink-0 rounded-lg transition duration-300">
                <div className='bg-gradient-to-t from-neutral-900 to-transparent h-fit w-full self-end pt-20 pb-4 pl-4 rounded-b-lg'>
                  <h4 className='text-neutral-200 text-xl mb-4'>{project.title}</h4>
                  <span className='uppercase text-neutral-400 font-bold'>12 march 2023</span>
                </div>
              </div>
            ))}
          </div>
          <button className="medium-btn-outline-bottom-dark flex gap-x-4 items-center">view projects<BsArrowUpRight/></button>
        </div>
      </section>
      <section>
      </section>
    </main>
  )
}
