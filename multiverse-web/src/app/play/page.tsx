import React from 'react'
import Container from '@/app/components/Container'
import client from '../apollo'
import { GET_PLAYS } from '../apollo/queries'
import PlaysGrid from '../components/PlaysGrid'

export default async function Play() {
  const { data, loading, error } = await client.query({ query: GET_PLAYS })

  if (loading || error || !data.plays) {
    return null
  }

  return (
    <>
      <Container>
        <PlaysGrid plays={data.plays} />
      </Container>
    </>
  )
}
