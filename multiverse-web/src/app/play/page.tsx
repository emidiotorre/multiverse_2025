import React from 'react'
import Container from '@/app/components/Container'
import client from '../apollo'
import { GET_PLAYS } from '../apollo/queries'
import PlaysGrid from '../components/PlaysGrid'

function spliceIntoChunks(arr: any[], chunkSize: number) {
  const res = []
  while (arr.length > 0) {
    const chunk = arr.splice(0, chunkSize)

    res.push(chunk)
  }
  return res
}
export default async function Play() {
  const { data, loading, error } = await client.query({ query: GET_PLAYS })

  if (loading || error) {
    return null
  }

  return (
    <>
      <Container>
        <PlaysGrid plays={spliceIntoChunks(data.plays, 10)} />
      </Container>
    </>
  )
}
