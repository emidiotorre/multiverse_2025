'use client'
import React, { useEffect, useState } from 'react'
import Container from '@/app/components/Container'
import getGridAreaFromIndex from '../utils/getGridAreaFromIndex'
import PlayPoster from '../components/PlayPoster'
import client from '../apollo'
import { GET_PLAYS } from '../apollo/queries'

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
  const maxLetter = 'O'
  const dividedPlays = spliceIntoChunks(data?.plays, 10)

  return (
    <>
      <Container>
        {dividedPlays?.map((plays: any, idx: number) => {
          return (
            <div
              className="grid grid-play-area gap-3 mb-3"
              key={'subgrid_' + idx}
            >
              {plays?.map((play: any, indx: number) => {
                const letterGridElement = getGridAreaFromIndex(indx, maxLetter)
                return (
                  <PlayPoster
                    key={'subgrid_item_' + indx}
                    id={play.id}
                    image_url={`${'https://multiverse-dev-directus.ov3mip.easypanel.host'}/assets/${
                      play.image.id
                    }`}
                    url={play.url}
                    body={play.body}
                    style={{ gridArea: letterGridElement }}
                  ></PlayPoster>
                )
              })}
            </div>
          )
        })}
      </Container>
    </>
  )
}
