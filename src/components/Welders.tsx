import Image from 'next/image'

import { MemberFieldsFragment } from '@/gql/graphql'
import React from 'react'

type WelderProps = {
    welders: (MemberFieldsFragment | null)[] | undefined | null 
}

const Welders: React.FC<WelderProps> = ({
    welders
}) => {

    if(welders === undefined || welders === null ){
        return null
    }

  return (
    <div>
        <div className="flex my-6">
        {welders.map(welder => (
            <div key={welder?.id as string} className="relative -mx-1 w-10 aspect-square border-2 border-neutral-50 rounded-full">
            <Image src={welder?.featuredImage?.node.sourceUrl as string} className="object-cover object-center rounded-full" alt="member1" fill={true}/>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Welders