import ServiceSection from '@/components/ServiceSection'
import { getServices } from '@/lib/server-utils'
import { notFound } from 'next/navigation'
import React from 'react'

type Props = {}

const Services = async(props: Props) => {

  const services = await getServices()

  if(services === undefined){
    return notFound()
  }

  return (
    <main className='container'>
      <div className='mx-auto overflow-x-hidden'>
        {services.map(service => (
          <ServiceSection key={service.node.id} service={service.node}/>
        ))}
      </div>
    </main>
  )
}

export default Services