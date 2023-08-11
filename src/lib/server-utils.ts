import 'server-only'

import { getClient } from './appolo-client'

import { type TypedDocumentNode } from '@apollo/client/core'

import { ApolloQueryResult } from '@apollo/client/core'
import { 
    CategoriesWithProjectsQuery, 
    ProjectsByCategoryQuery, 
    ServiceListQuery, ServiceListQueryVariables, 
    TeamListQuery, 
    TeamMemberProjectsQuery, 
    TeamMemberProjectsQueryVariables, 
    TeamMemberQuery, 
    FaqListQuery, 
    FaqListQueryVariables, 
    TeamMemberQueryVariables,
    TeamListQueryVariables,
    ProjectsByCategoryQueryVariables,
    CategoriesWithProjectsQueryVariables} from '@/gql/graphql'

import { OperationVariables } from '@apollo/client/core'

import { CategoriesWithProjects, ProjectsByCategory } from '../graphql/Projects.graphql'
import { TeamList, TeamMember, TeamMemberProjects } from '../graphql/Team.graphql'
import { FAQList } from '../graphql/Faqs.graphql'
import { ServiceList } from '../graphql/Services.graphql'

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

    const { data, errors, error } = await fetcher<CategoriesWithProjectsQuery, CategoriesWithProjectsQueryVariables>(CategoriesWithProjects, variables)

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

    const { data, error } = await fetcher<ProjectsByCategoryQuery, ProjectsByCategoryQueryVariables >(ProjectsByCategory, variables)

    if(error){
        console.log(error.message)
        return
    }

    return data.projectCategory
}

export const getTeam = async() => {


    const { data, error } = await fetcher<TeamListQuery, TeamListQueryVariables >(TeamList)

    if(error){
        console.log(error.message)
        return
    }

    return data.team?.edges
}

export const getWelderBySlug = async(slug: string) => {

    const variables = {
        slug
    }

    const { data, error } = await fetcher<TeamMemberQuery, TeamMemberQueryVariables >(TeamMember, variables)

    if(error){
        console.log(error.message)
        return
    }

    return data.member

}

export const getProjectsByWelder = async(slug: string) => {

    const variables = {
        slug
    }

    const { data, error } = await fetcher<TeamMemberProjectsQuery, TeamMemberProjectsQueryVariables>(TeamMemberProjects, variables)

    if(error){
        console.log(error.message)
        return
    }

    return data.member?.teamFields?.projectmembersrelationship

}

export const getServices = async() => {

    const { data, error } = await fetcher<ServiceListQuery, ServiceListQueryVariables>(ServiceList)

    if(error){
        console.log(error.message)
        return
    }

    return data.services?.edges

}

export const getFaqs =async () => {
    
    const { data, error } = await fetcher<FaqListQuery, FaqListQueryVariables>(FAQList)

    if(error){
        console.log(error.message)
        return
    }

    return data
}