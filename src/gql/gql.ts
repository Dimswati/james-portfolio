/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query FAQList {\n  fAQs {\n    edges {\n      node {\n        ...FAQFields\n      }\n    }\n  }\n}\n\nfragment FAQFields on FAQ {\n  id\n  title\n  slug\n  faqsFields {\n    faqAnswer\n  }\n}": types.FaqListDocument,
    "query CategoriesWithProjects($first: Int, $where: RootQueryToProjectCategoryConnectionWhereArgs) {\n  projectCategories(first: $first, where: $where) {\n    edges {\n      node {\n        ...CategoryFields\n      }\n    }\n  }\n}\n\nquery ProjectsByCategory($slug: ID!) {\n  projectCategory(id: $slug, idType: SLUG) {\n    ...CategoryFields\n  }\n}\n\nfragment CategoryFields on ProjectCategory {\n  id\n  name\n  slug\n  projects {\n    ...ProjectList\n  }\n}\n\nfragment ProjectList on ProjectCategoryToProjectConnection {\n  edges {\n    node {\n      ...ProjectFields\n    }\n  }\n}\n\nfragment ProjectFields on Project {\n  id\n  title\n  slug\n  date\n  featuredImage {\n    node {\n      sourceUrl\n    }\n  }\n  projectFields {\n    ...CustomProjectFields\n  }\n}\n\nfragment CustomProjectFields on Project_Projectfields {\n  cost\n  time\n  timeFormat\n  photos {\n    id\n    date\n    sourceUrl\n  }\n  projectmembersrelationship {\n    ... on Member {\n      id\n      title\n      slug\n      featuredImage {\n        node {\n          sourceUrl\n        }\n      }\n    }\n  }\n}": types.CategoriesWithProjectsDocument,
    "query ServiceList {\n  services {\n    edges {\n      node {\n        ...ServiceFields\n      }\n    }\n  }\n}\n\nfragment ServiceFields on Service {\n  id\n  title\n  slug\n  serviceFields {\n    description\n    ...CustomServiceFields\n  }\n}\n\nfragment CustomServiceFields on Service_Servicefields {\n  photos {\n    id\n    sourceUrl\n  }\n}": types.ServiceListDocument,
    "query TeamList {\n  team {\n    edges {\n      node {\n        ...MemberFields\n      }\n    }\n  }\n}\n\nquery TeamMember($slug: ID!) {\n  member(id: $slug, idType: SLUG) {\n    ...MemberFields\n    teamFields {\n      aboutMember\n    }\n  }\n}\n\nquery TeamMemberProjects($slug: ID!) {\n  member(id: $slug, idType: SLUG) {\n    teamFields {\n      projectmembersrelationship {\n        ... on Project {\n          id\n          title\n          slug\n          date\n          featuredImage {\n            node {\n              sourceUrl\n            }\n          }\n          projectFields {\n            cost\n            time\n            timeFormat\n            photos {\n              id\n              date\n              sourceUrl\n            }\n            projectmembersrelationship {\n              ... on Member {\n                id\n                title\n                slug\n                featuredImage {\n                  node {\n                    sourceUrl\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment MemberFields on Member {\n  id\n  title\n  slug\n  featuredImage {\n    node {\n      sourceUrl\n    }\n  }\n}": types.TeamListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query FAQList {\n  fAQs {\n    edges {\n      node {\n        ...FAQFields\n      }\n    }\n  }\n}\n\nfragment FAQFields on FAQ {\n  id\n  title\n  slug\n  faqsFields {\n    faqAnswer\n  }\n}"): typeof import('./graphql').FaqListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoriesWithProjects($first: Int, $where: RootQueryToProjectCategoryConnectionWhereArgs) {\n  projectCategories(first: $first, where: $where) {\n    edges {\n      node {\n        ...CategoryFields\n      }\n    }\n  }\n}\n\nquery ProjectsByCategory($slug: ID!) {\n  projectCategory(id: $slug, idType: SLUG) {\n    ...CategoryFields\n  }\n}\n\nfragment CategoryFields on ProjectCategory {\n  id\n  name\n  slug\n  projects {\n    ...ProjectList\n  }\n}\n\nfragment ProjectList on ProjectCategoryToProjectConnection {\n  edges {\n    node {\n      ...ProjectFields\n    }\n  }\n}\n\nfragment ProjectFields on Project {\n  id\n  title\n  slug\n  date\n  featuredImage {\n    node {\n      sourceUrl\n    }\n  }\n  projectFields {\n    ...CustomProjectFields\n  }\n}\n\nfragment CustomProjectFields on Project_Projectfields {\n  cost\n  time\n  timeFormat\n  photos {\n    id\n    date\n    sourceUrl\n  }\n  projectmembersrelationship {\n    ... on Member {\n      id\n      title\n      slug\n      featuredImage {\n        node {\n          sourceUrl\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').CategoriesWithProjectsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ServiceList {\n  services {\n    edges {\n      node {\n        ...ServiceFields\n      }\n    }\n  }\n}\n\nfragment ServiceFields on Service {\n  id\n  title\n  slug\n  serviceFields {\n    description\n    ...CustomServiceFields\n  }\n}\n\nfragment CustomServiceFields on Service_Servicefields {\n  photos {\n    id\n    sourceUrl\n  }\n}"): typeof import('./graphql').ServiceListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query TeamList {\n  team {\n    edges {\n      node {\n        ...MemberFields\n      }\n    }\n  }\n}\n\nquery TeamMember($slug: ID!) {\n  member(id: $slug, idType: SLUG) {\n    ...MemberFields\n    teamFields {\n      aboutMember\n    }\n  }\n}\n\nquery TeamMemberProjects($slug: ID!) {\n  member(id: $slug, idType: SLUG) {\n    teamFields {\n      projectmembersrelationship {\n        ... on Project {\n          id\n          title\n          slug\n          date\n          featuredImage {\n            node {\n              sourceUrl\n            }\n          }\n          projectFields {\n            cost\n            time\n            timeFormat\n            photos {\n              id\n              date\n              sourceUrl\n            }\n            projectmembersrelationship {\n              ... on Member {\n                id\n                title\n                slug\n                featuredImage {\n                  node {\n                    sourceUrl\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment MemberFields on Member {\n  id\n  title\n  slug\n  featuredImage {\n    node {\n      sourceUrl\n    }\n  }\n}"): typeof import('./graphql').TeamListDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
