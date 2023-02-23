import React from 'react'
import Container from '@/app/components/Container'
import client from '@/app/apollo'
import { GET_WORKS_IMG } from '../apollo/queries'
import WorksGrid from '../components/WorksGrid'

export default async function Work() {
  const { data, loading, error } = await client.query({ query: GET_WORKS_IMG })
  if (loading || error) {
    return null
  }
  return (
    <>
      <Container>
        <WorksGrid works={data.works} />
      </Container>
    </>
  )
}
