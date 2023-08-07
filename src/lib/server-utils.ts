import 'server-only'

import { getClient } from './appolo-client'

import { type TypedDocumentNode } from '@apollo/client/core'

import { ApolloQueryResult } from '@apollo/client/core'
import { ProjectListQuery } from '@/gql/graphql'

import ProjectList from '../graphql/Projects.graphql'

const fetcher = <TResult, TVariables>(
    document: TypedDocumentNode<TResult, TVariables>,
    variables?: TVariables extends Record<string, never> ? [] : [TVariables]
): Promise<ApolloQueryResult<TResult>> => {
    return getClient().query({
        query: document
    })
}


export const getProjects = async() => {
    const { data, errors, error } = await fetcher<ProjectListQuery, {}>(ProjectList)

    if(error){
        console.log(error.message)
        return
    }

    return data.projects?.edges
}