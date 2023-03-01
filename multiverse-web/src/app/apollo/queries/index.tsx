import { gql } from '@apollo/client'

export const GET_WORKS_IMG = gql`
  query getWorkImg {
    works: Works {
      id
      date_created
      slug
      Name
      image {
        id
      }
    }
  }
`
export const GET_PLAYS = gql`
  query GetPlays {
    plays: Play {
      id
      image {
        id
        height
        width
      }
      body
      url
    }
  }
`

const WORK_FRAG = gql`
  fragment fullWork on Works {
    id
    Name
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
      id
      item {
        ... on GalleryBlocks {
          __typename
          tipologia
          aspect_ratio
          image_1 {
            id
          }
          image_2 {
            id
          }
          image_3 {
            id
          }
        }
      }
    }
  }
`
export const GET_ABOUT = gql`
  query getAbout {
    about: About {
      id
      blocks {
        id
        item {
          type: __typename
          ... on TextBlock {
            id
            Title
            Body
            columns
          }
          ... on ImageBlock {
            image {
              height
              width
              id
            }
          }
        }
      }
    }
  }
`
export const GET_HOME = gql`
  query getHome {
    home: Home {
      id
      header
    }
  }
`
export const GET_FOOTER = gql`
  query getFooter {
    footer: Footer {
      id
      col1
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
export const GET_WORK_BY_SLUG = gql`
  query getWorkBySlug($slug: String) {
    work: Works(filter: { slug: { _eq: $slug } }) {
      ...fullWork
    }
  }

  ${WORK_FRAG}
`
