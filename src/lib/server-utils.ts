import 'server-only'

import { getClient } from './appolo-client'

import { type TypedDocumentNode } from '@apollo/client/core'

import { ApolloQueryResult } from '@apollo/client/core'
import { ProjectsByCategoryQuery } from '@/gql/graphql'

import { OperationVariables } from '@apollo/client/core'

import ProjectsByCategory from '../graphql/Projects.graphql'

// type QueryVariables<> = {
//     [key: string]: TValue
// }


const fetcher = <TResult, TVariables>(
    document: TypedDocumentNode<TResult, TVariables>,
    variables?: OperationVariables
): Promise<ApolloQueryResult<TResult>> => {
    return getClient().query({
        query: document,
        variables: variables
    })
}

export const getProjectsByCategory = async() => {

    const variables = {
            first: 2,
            wherer: {
                order: "ASC"
            } 
        }

    const { data, errors, error } = await fetcher<ProjectsByCategoryQuery, {}>(ProjectsByCategory, variables)

    if(error){
        console.log(error.message)
        return
    }

    return data.projectCategories?.edges
}