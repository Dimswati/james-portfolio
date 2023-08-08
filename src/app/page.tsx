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

export default function Home() {
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
            <button className="medium-btn-gradient md:w-fit w-full">Call me now</button>
            <button className="large-btn-outline-bottom-dark flex gap-x-6 items-center w-fit">view projects<BsArrowUpRight/></button>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-b from-neutral-900 to-rose-900 py-24">
        <div className="container">
          <h2 className="text-4xl text-neutral-100 font-inria-serif text-center mb-4">My InDemand Services</h2>
          <p className="uppercase text-neutral-400 text-lg text-center lg:mb-32 md:mb-24 mb-20">here is what i can do for you</p>
          <div className="lg:max-w-[75vw] mx-auto overflow-x-hidden">
            <div className="flex md:flex-row flex-col gap-y-16 lg:gap-x-20 md:gap-x-12 lg:mb-24 mb-20">
              <div>
                <div className="relative lg:h-[320px] lg:w-[460px] md:h-[280px] md:w-[400px] h-72 lg:mb-24 mb-16 w-full">
                  <Image src='http://a.ourhtmldemo.com/decorators/wp-content/uploads/2016/11/service-image-1.jpg' alt="" className="object-cover origin-center rounded-lg" fill={true}/>
                </div> 
                <div className="flex gap-x-4 relative w-fit after:absolute after:top-[50%] after:left-48 after:w-[90vw] after:h-[1px] after:bg-neutral-100">
                  <button className="text-neutral-100 text-xl p-4 border border-neutral-100 rounded-full"><BsChevronLeft/></button>
                  <button className="text-neutral-100 text-xl p-4 border border-neutral-100 rounded-full"><BsChevronRight/></button>
                </div>
              </div>
              <div className="lg:mt-12 md:mt-8">
                <h4 className="text-3xl text-neutral-100 font-inria-serif mb-8">Gate Designing and Construction</h4>
                <p className="text-lg text-neutral-300 mb-12">From as low as 600,000/= up to 5million</p>
                <button className="medium-btn-outline-light flex gap-x-4 items-center"><IoCallOutline/><span>Request Quotation</span></button>
              </div>
            </div>
            <div className="flex md:flex-row-reverse justify-between flex-col gap-y-16 lg:gap-x-20 md:gap-x-12 lg:mb-24 mb-20">
              <div>
                <div className="relative lg:h-[320px] lg:w-[460px] md:h-[280px] md:w-[400px] h-72 lg:mb-24 mb-16 w-full">
                  <Image src='http://a.ourhtmldemo.com/decorators/wp-content/uploads/2016/11/service-image-1.jpg' alt="" className="object-cover origin-center rounded-lg" fill={true}/>
                </div> 
                <div className="flex gap-x-4 relative after:absolute after:top-[50%] after:right-48  after:w-[90vw] after:h-[1px] after:bg-neutral-100 justify-end">
                  <button className="text-neutral-100 text-xl p-4 border border-neutral-100 rounded-full"><BsChevronLeft/></button>
                  <button className="text-neutral-100 text-xl p-4 border border-neutral-100 rounded-full"><BsChevronRight/></button>
                </div>
              </div>
              <div className="lg:mt-12 md:mt-8">
                <h4 className="text-3xl text-neutral-100 font-inria-serif mb-8">Gate Designing and Construction</h4>
                <p className="text-lg text-neutral-300 mb-12">From as low as 600,000/= up to 5million</p>
                <button className="medium-btn-outline-light flex gap-x-4 items-center"><IoCallOutline/><span>Request Quotation</span></button>
              </div>
            </div>
            <div className="flex md:flex-row flex-col gap-y-16 lg:gap-x-20 md:gap-x-12 lg:mb-24 mb-20">
              <div>
                <div className="relative lg:h-[320px] lg:w-[460px] md:h-[280px] md:w-[400px] h-72 lg:mb-24 mb-16 w-full">
                  <Image src='http://a.ourhtmldemo.com/decorators/wp-content/uploads/2016/11/service-image-1.jpg' alt="" className="object-cover origin-center rounded-lg" fill={true}/>
                </div> 
                <div className="flex gap-x-4 relative w-fit after:absolute after:top-[50%] after:left-48 after:w-[90vw] after:h-[1px] after:bg-neutral-100">
                  <button className="text-neutral-100 text-xl p-4 border border-neutral-100 rounded-full"><BsChevronLeft/></button>
                  <button className="text-neutral-100 text-xl p-4 border border-neutral-100 rounded-full"><BsChevronRight/></button>
                </div>
              </div>
              <div className="lg:mt-12 md:mt-8">
                <h4 className="text-3xl text-neutral-100 font-inria-serif mb-8">Gate Designing and Construction</h4>
                <p className="text-lg text-neutral-300 mb-12">From as low as 600,000/= up to 5million</p>
                <button className="medium-btn-outline-light flex gap-x-4 items-center"><IoCallOutline/><span>Request Quotation</span></button>
              </div>
            </div>
            <div className="flex md:flex-row-reverse justify-between flex-col gap-y-16 lg:gap-x-20 md:gap-x-12 lg:mb-24 mb-20">
              <div>
                <div className="relative lg:h-[320px] lg:w-[460px] md:h-[280px] md:w-[400px] h-72 lg:mb-24 mb-16 w-full">
                  <Image src='http://a.ourhtmldemo.com/decorators/wp-content/uploads/2016/11/service-image-1.jpg' alt="" className="object-cover origin-center rounded-lg" fill={true}/>
                </div> 
                <div className="flex gap-x-4 relative after:absolute after:top-[50%] after:right-48  after:w-[90vw] after:h-[1px] after:bg-neutral-100 justify-end">
                  <button className="text-neutral-100 text-xl p-4 border border-neutral-100 rounded-full"><BsChevronLeft/></button>
                  <button className="text-neutral-100 text-xl p-4 border border-neutral-100 rounded-full"><BsChevronRight/></button>
                </div>
              </div>
              <div className="lg:mt-12 md:mt-8">
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
              <button className="medium-btn-gradient">Call me now</button>
            </div>
            <div className="md:w-1/2 md:basis-1/2 w-full basis-full">
              <h2 className="text-2xl font-semibold text-neutral-800 mb-4">Step 2</h2>
              <p className="text-xl text-neutral-900 leading-8">Most projects are done in two ways, either my clients bring their own materials or they live the entire process to me</p>
            </div>
          </div>
          <h3 className="text-xl text-center font-semibold mb-20"><span className="text-neutral-600">choice A:</span> Bring your own Materials</h3>
          <div className="flex md:flex-row flex-col gap-y-16 lg:gap-x-16 md:gap-x-12 mb-24">
            <div className="relative h-80 md:basis-1/2"><Image src='http://a.ourhtmldemo.com/decorators/wp-content/uploads/2016/11/service-image-1.jpg' alt="" className="object-cover origin-center rounded-md" fill={true}/></div>
            <p className="text-lg leading-8 text-neutral-800 md:w-1/2 md:basis-1/2 w-full basis-full md:mt-6 mt-0">For this I will only charge you 30% of the project cost. Here you will need to search for the right metals from your trusted supplier</p>
          </div>
          <h3 className="text-xl text-center font-semibold mb-20"><span className="text-neutral-600">Choice B:</span> Let me handle the hard stuff for you</h3>
          <div className="flex md:flex-row-reverse flex-col gap-y-16 gap-x-16 mb-24">
            <div className="relative h-80 md:basis-1/2"><Image src='http://a.ourhtmldemo.com/decorators/wp-content/uploads/2016/11/service-image-1.jpg' alt="" className="object-cover origin-center rounded-md" fill={true}/></div>
            <p className="text-lg leading-8 text-neutral-800 md:w-1/2 md:basis-1/2 w-full basis-full md:mt-6 mt-0">70% of my client prefer this way Lets agree on the project cost I will handle the rest</p>
          </div>
          <div className="flex">
            <div className="md:w-1/2 md:basis-1/2 w-full basis-full">
              <h2 className="text-2xl font-semibold text-neutral-800 mb-4">Step 4</h2>
              <p className="text-xl text-neutral-900 mb-8">Just tell me about your project over phone call or whatsapp</p>
              <button className="medium-btn-outline-dark">See contract</button>
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
              <div className="bg-neutral-100 h-[1px] w-full"></div>
              <div className="flex justify-between gap-x-6 items-center text-2xl text-neutral-100 my-12">
                <h4 className="capitalize">Is there a down payment</h4>
                <span><AiOutlineMinus/></span>
              </div>
              <p className="text-neutral-200 text-lg font-light">Depending on which you like, you can decide either to bring your own materials or live the entire process to me</p>
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
            </div>
            <div className="mb-12">
              <div className="bg-neutral-100 h-[1px] w-full"></div>
              <div className="flex justify-between gap-x-6 items-center text-2xl text-neutral-100 my-12">
                <h4 className="capitalize">Is there a down payment</h4>
                <span><AiOutlinePlus/></span>
              </div>
              <p className="text-neutral-200 text-lg font-light hidden">Depending on which you like, you can decide either to bring your own materials or live the entire process to me</p>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-20">
        <div className="bg-gradient-to-b from-neutral-300 to-neutral-50 pb-12 pt-24 mb-24">
          <h2 className="text-4xl text-neutral-800 font-inria-serif text-center mb-4">My Past Work</h2>
          <p className="uppercase text-neutral-700 text-lg text-center">what i will build for you</p>
        </div>
        <div className="container mb-20">
          <div className="flex gap-x-12 justify-between items-center mb-20">
              <div className="text-lg text-neutral-800">
                <h3 className="text-3xl font-semibold text-neutral-900 mb-8">Grills</h3>
                <p className="lg:max-w-[50vw]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum dicta maiores sunt repudiandae veritatis repellendus nihil, quas suscipit dolores inventore.</p>
              </div>
          </div>
          <div className="mb-12">
            <ProjectSwiper projects={projects}/>
          </div>
          <div className="flex items-center justify-between">
            <button className="large-btn-outline-bottom-dark flex gap-x-6 items-center">view projects<BsArrowUpRight/></button>
            <div className="flex gap-x-4 items-center">
              <button className="text-neutral-800 text-xl md:p-4 p-3 border border-neutral-800 rounded-full"><BsChevronLeft/></button>
              <button className="text-neutral-800 text-xl md:p-4 p-3 border border-neutral-800 rounded-full"><BsChevronRight/></button>
            </div>
          </div>
        </div>
        <>
          <ProjectSection/>
        </>
        <div className="my-24">
          <h3 className="text-2xl font-bold mb-16 text-center">From small exiting projects</h3>
          <div className="before:bg-slate-800 before:w-44 before:h-60 overflow-x-hidden">
            <div className="slide-left overflow-x-hidden mb-8 whitespace-nowrap">
              {projects.map(project => (
                  <div key={project.id} className="relative w-[220px] h-[160px] inline-block mx-4">
                    <Image src={project.imageUrl} fill={true} className="object-cover object-center rounded-lg" alt={project.title}/>
                  </div>
                ))}
            </div>
            <div className="slide-left overflow-x-hidden mb-8 whitespace-nowrap">
              {projects.map(project => (
                  <div key={project.id} className="relative w-[260px] h-[200px] inline-block mx-4">
                    <Image src={project.imageUrl} fill={true} className="object-cover object-center rounded-lg" alt={project.title}/>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="container my-24">
          <h3 className="text-2xl font-bold mb-20 text-center">To Large Contracts</h3>
          <div className="lg:max-w-[75vw] mx-auto">
            <div className="flex md:flex-row flex-col gap-y-16 lg:gap-x-16 md:gap-x-12 overflow-x-hidden mb-24 items-center">
              <div className="w-full">
                <div className="relative lg:h-[320px] lg:md:w-[420px] md:h-[280px] md:w-[360px] h-[300px] w-full">
                  <Image src='http://a.ourhtmldemo.com/decorators/wp-content/uploads/2016/11/service-image-1.jpg' alt="" className="object-cover origin-center rounded-lg" fill={true}/>
                </div>
              </div>
              <div>
                <h4 className="text-2xl font-semibold text-neutral-800 font-inria-serif mb-8">Extend Morturay Facilities</h4>
                <p className="text-lg text-neutral-600 mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nihil ad asperiores tempore inventore sit autem, quo excepturi explicabo quibusdam atque neque hic optio eum ipsum totam omnis dicta in.</p>
                <table className="border-collapse border-spacing-4 table-auto w-full">
                  <tbody>
                    <tr className="border divide-x divide-neutral-300 border-neutral-300 rounded-t-md">
                      <td className="text-neutral-700 py-3 pl-2">Date</td>
                      <td className="pl-3 font-bold text-neutral-800">13th March 2020</td>
                    </tr>
                    <tr className="border divide-x divide-neutral-300 border-neutral-300">
                      <td className="text-neutral-700 py-3 pl-2">Duration</td>
                      <td className="pl-3 font-bold text-neutral-800">30 days</td>
                    </tr>
                    <tr className="border divide-x divide-neutral-300 border-neutral-300 py-2 pl-2">
                      <td className="text-neutral-700 py-3 pl-2">Workers</td>
                      <td className="pl-3 font-bold text-neutral-800">3 welders</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="flex md:flex-row flex-col gap-y-16 lg:gap-x-16 md:gap-x-12 overflow-x-hidden mb-24 items-center">
              <div className="w-full">
                <div className="relative lg:h-[320px] lg:md:w-[420px] md:h-[280px] md:w-[360px] h-[300px] w-full">
                  <Image src='http://a.ourhtmldemo.com/decorators/wp-content/uploads/2016/11/service-image-1.jpg' alt="" className="object-cover origin-center rounded-lg" fill={true}/>
                </div>
              </div>
              <div>
                <h4 className="text-2xl font-semibold text-neutral-800 font-inria-serif mb-8">Extend Morturay Facilities</h4>
                <p className="text-lg text-neutral-600 mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nihil ad asperiores tempore inventore sit autem, quo excepturi explicabo quibusdam atque neque hic optio eum ipsum totam omnis dicta in.</p>
                <table className="border-collapse border-spacing-4 table-auto w-full">
                  <tbody>
                    <tr className="border divide-x divide-neutral-300 border-neutral-300 rounded-t-md">
                      <td className="text-neutral-700 py-3 pl-2">Date</td>
                      <td className="pl-3 font-bold text-neutral-800">13th March 2020</td>
                    </tr>
                    <tr className="border divide-x divide-neutral-300 border-neutral-300">
                      <td className="text-neutral-700 py-3 pl-2">Duration</td>
                      <td className="pl-3 font-bold text-neutral-800">30 days</td>
                    </tr>
                    <tr className="border divide-x divide-neutral-300 border-neutral-300 py-2 pl-2">
                      <td className="text-neutral-700 py-3 pl-2">Workers</td>
                      <td className="pl-3 font-bold text-neutral-800">3 welders</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="container flex flex-col items-center">
          <h4 className="text-2xl text-neutral-800 text-center font-bold mb-8 leading-9">I do them all with my youthful enthusiasm and ultimate customer satisfaction</h4>
          <button className="medium-btn-gradient w-fit mb-12">call me now</button>
          <p className="text-neutral-500">Customer reviews coming here soon</p>
        </div>
      </section>
      <section className="bg-gradient-to-b from-neutral-900 to-rose-900 pt-24 pb-16">
        <div className="container">
          <h2 className="text-4xl text-neutral-100 font-inria-serif text-center mb-12">Team JJ</h2>
          <p className="uppercase text-neutral-300 text-lg text-center leading-9 mb-24">with A team of over 40years Experience in welding <br/> you are assured of what you will get</p>
          <div className="lg:max-w-[60vw] mx-auto">
            <div className="flex md:flex-row flex-col gap-y-12 gap-x-12 md:items-center my-16">
              <div className="relative sm:w-72 sm:h-72 aspect-square sm:aspect-auto w-full flex-shrink-0">
                <Image src={projects[0].imageUrl} alt={projects[0].title} fill={true} className="object-cover object-center rounded-lg"/>
              </div>
              <div className="">
                <h4 className="text-2xl font-semibold text-neutral-100 font-inria-serif mb-8">Dad James</h4>
                <p className="text-lg text-neutral-300 mb-8">Since childhood he coached me on welding, without him I could not be metal artist I am at 22. Deep love dad</p>
                <span className="text-neutral-300 font-bold">25 yrs in welding</span>
              </div>
            </div>

            <div className="flex md:flex-row flex-col gap-y-12 gap-x-12 md:items-center my-16">
              <div className="relative sm:w-72 sm:h-72 aspect-square sm:aspect-auto w-full flex-shrink-0">
                <Image src={projects[0].imageUrl} alt={projects[0].title} fill={true} className="object-cover object-center rounded-lg"/>
              </div>
              <div className="">
                <h4 className="text-2xl font-semibold text-neutral-100 font-inria-serif mb-8">Dad James</h4>
                <p className="text-lg text-neutral-300 mb-8">Since childhood he coached me on welding, without him I could not be metal artist I am at 22. Deep love dad</p>
                <span className="text-neutral-300 font-bold">25 yrs in welding</span>
              </div>
            </div>

            <div className="flex md:flex-row flex-col gap-y-12 gap-x-12 md:items-center mt-16">
              <div className="relative sm:w-72 sm:h-72 aspect-square sm:aspect-auto w-full flex-shrink-0">
                <Image src={projects[0].imageUrl} alt={projects[0].title} fill={true} className="object-cover object-center rounded-lg"/>
              </div>
              <div className="">
                <h4 className="text-2xl font-semibold text-neutral-100 font-inria-serif mb-8">Dad James</h4>
                <p className="text-lg text-neutral-300 mb-8">Since childhood he coached me on welding, without him I could not be metal artist I am at 22. Deep love dad</p>
                <span className="text-neutral-300 font-bold">25 yrs in welding</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
