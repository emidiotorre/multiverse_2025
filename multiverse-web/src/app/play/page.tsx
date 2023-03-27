import React from 'react'
import Container from '@/app/components/Container'
import { GET_PLAYS_IMAGE, GET_PLAYS_TITLES } from '../apollo/queries'
import PlaysGrid from '../components/PlaysGrid'
import { fetcher } from '../apollo'

export default async function Play() {
  const { play_page } = await fetcher({
    query: GET_PLAYS_TITLES,
    variables: null,
  })
  const { plays } = await fetcher({
    query: GET_PLAYS_IMAGE,
    variables: null,
  })
  return (
    <>
      <Container>
        <PlaysGrid play_page={play_page} plays={plays} />
      </Container>
    </>
  )
}
