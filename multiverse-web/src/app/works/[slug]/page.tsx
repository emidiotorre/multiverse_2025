import React from 'react'
import { fetcher } from '@/app/apollo'
import { GET_WORK_BY_SLUG } from '@/app/apollo/queries'
import Personal from '@/app/components/Personal'
import { NextRequest } from 'next/server'

export default async function Work({ params }: { params: { slug: string } }) {
  const { work } = await fetcher({
    query: GET_WORK_BY_SLUG,
    variables: {
      slug: params.slug,
    },
  })

  return <Personal work={work[0]} />
}
