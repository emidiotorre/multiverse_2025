import React from 'react'
import Container from '@/app/components/Container'

import { GET_PLAYS } from '../apollo/queries'
import PlaysGrid from '../components/PlaysGrid'
import { fetcher } from '../apollo'

export default async function Play() {
  const { plays } = await fetcher({ query: GET_PLAYS, variables: null })
  return (
    <>
      <Container>
        <PlaysGrid plays={plays} />
      </Container>
    </>
  )
}
