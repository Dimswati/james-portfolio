import 'server-only'

import { HttpLink } from '@apollo/client'
import { NextSSRInMemoryCache, NextSSRApolloClient } from '@apollo/experimental-nextjs-app-support/ssr'
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc'

export const { getClient } = registerApolloClient(()=>{
    return new NextSSRApolloClient({
        cache: new NextSSRInMemoryCache(),
        link: new HttpLink({
            uri: process.env.API_URL
        }),
        defaultOptions: {
            watchQuery: {
                nextFetchPolicy(currentFetchPolicy) {
                    if(currentFetchPolicy === 'network-only' || currentFetchPolicy === 'cache-and-network' ){
                        return 'cache-first'
                    }
                    return currentFetchPolicy
                },
            }
        }
    })
})