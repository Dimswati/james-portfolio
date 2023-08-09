import 'server-only'

import { getClient } from './appolo-client'

import { type TypedDocumentNode } from '@apollo/client/core'

import { ApolloQueryResult } from '@apollo/client/core'
import { CategoriesWithProjectsQuery, ProjectsByCategoryQuery, TeamListDocument, TeamListQuery } from '@/gql/graphql'

import { OperationVariables } from '@apollo/client/core'

import { CategoriesWithProjects, ProjectsByCategory } from '../graphql/Projects.graphql'
import { TeamList } from '../graphql/Team.graphql'

const fetcher = <TResult, TVariables>(
    document: TypedDocumentNode<TResult, TVariables>,
    variables?: OperationVariables
): Promise<ApolloQueryResult<TResult>> => {
    return getClient().query({
        query: document,
        variables: variables,
        context: {
            fetchOptions: {
                next: { revalidate: 5 }
            }
        },
        fetchPolicy: 'network-only',
    })
}

export const getCategoryWithProjects = async() => {

    const variables = {
            first: 2,
            where: {
                order: "ASC"
        } 
    }

    const { data, errors, error } = await fetcher<CategoriesWithProjectsQuery, typeof variables>(CategoriesWithProjects, variables)

    if(error){
        console.log(error.message)
        return
    }

    return data.projectCategories?.edges
}

export const getProjectsByCategory = async(slug: string) => {

    const variables = {
        slug
    }

    const { data, error } = await fetcher<ProjectsByCategoryQuery, typeof variables >(ProjectsByCategory, variables)

    if(error){
        console.log(error.message)
        return
    }

    return data.projectCategory
}

export const getTeam = async() => {


    const { data, error } = await fetcher<TeamListQuery, {} >(TeamList)

    if(error){
        console.log(error.message)
        return
    }

    return data.team?.edges
}