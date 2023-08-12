import React from 'react'

import Image from 'next/image'
import projects from '@/lib/projects'
import { getTeam } from '@/lib/server-utils'
import Link from 'next/link'

import { BsArrowUpRight, BsWhatsapp } from 'react-icons/bs'
import WelderCard from '@/components/WelderCard'

const Team = async() => {

  const team = await getTeam()

  if(team === undefined || team.length < 1) {
    return (
      <main>
        <section className='container'>No member exist</section>
      </main>
    ) 
  }

  // console.log(team)

  return (
    <section className="container py-20">
      <h2 className="text-4xl text-neutral-800 font-inria-serif text-center mb-12">Team JJ</h2>
      <p className="uppercase text-neutral-700 text-lg text-center leading-9 mb-32">with A team of over 40years Experience in welding <br/> you are assured of what you will get</p>
        <div className='grid gap-x-12 gap-y-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-neutral-50'>
          {team.map(welder => (
            <WelderCard key={welder.node.id} welder={welder.node}/>
          ))}
        </div>
    </section>
  )
}

export default Team