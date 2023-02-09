import React from 'react'
import client from '@/app/apollo'
import { GET_WORK_BY_SLUG } from '@/app/apollo/queries'
import Personal from '@/app/components/Personal'

export default async function Work({ params }: { params: any }) {
  const { data, loading, error } = await client.query({
    query: GET_WORK_BY_SLUG,
    variables: {
      slug: params.slug,
    },
  })
  if (loading || error) {
    return null
  }
  return (
    <>
      <Personal work={data.work[0]} />
    </>
  )
}
