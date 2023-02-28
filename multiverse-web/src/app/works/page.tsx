import React from 'react'
import Container from '@/app/components/Container'
import { fetcher } from '@/app/apollo'
import { GET_WORKS_IMG } from '../apollo/queries'
import WorksGrid from '../components/WorksGrid'

export default async function Work() {
  const { works } = await fetcher({ query: GET_WORKS_IMG, variables: null })

  return (
    <Container>
      <WorksGrid works={works} />
    </Container>
  )
}
