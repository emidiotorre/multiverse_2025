import { gql } from '@apollo/client'

export const GET_WORKS_IMG = gql`
  query getWorkImg {
    works: Works {
      id
      slug
      Name
      image {
        id
      }
      gallery {
        image: directus_files_id {
          id
        }
      }
    }
  }
`

const WORK_FRAG = gql`
  fragment fullWork on Works {
    id
    Name
    SubTitle
    Type
    slug
    Body
    Credits
    image {
      id
    }
    video {
      id
    }
    gallery {
      image: directus_files_id {
        id
      }
    }
  }
`
export const GET_ABOUT_PAGE = gql`
  query getAboutPage {
    about: About {
      id
      body
    }
  }
`
export const GET_COSE_PAGE = gql`
  query getCosePage {
    cose: Cose {
      id
      body
    }
  }
`
export const GET_FOOTER = gql`
  query getFooter {
    footer: Footer {
      id
      col1
      col2
    }
  }
`

const LISTWORK_FRAG = gql`
  fragment listWork on Works {
    id
    Name
    Type
    slug
    image {
      id
    }
  }
`

export const GET_WORKS = gql`
  query getWorks {
    works: Works {
      ...listWork
    }
  }
  ${LISTWORK_FRAG}
`
export const GET_HOME = gql`
  query getHome {
    works: Works {
      ...listWork
    }

    cose: Cose {
      id
      body
    }

    about: About {
      id
      body
    }
  }
  ${LISTWORK_FRAG}
`

export const GET_WORK_BY_SLUG = gql`
  query getWorkBySlug($slug: String) {
    work: Works(filter: { slug: { _eq: $slug } }) {
      ...fullWork
    }
  }

  ${WORK_FRAG}
`
