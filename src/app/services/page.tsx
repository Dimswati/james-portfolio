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
    <main>
      {services.map(service => (
        <ServiceSection service={service.node}/>
      ))}
    </main>
  )
}

export default Services