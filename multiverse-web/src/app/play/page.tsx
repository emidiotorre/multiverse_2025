import React from 'react'
import Container from '@/app/components/Container'
import getGridAreaFromIndex from '../utils/getGridAreaFromIndex'
import client from '../apollo'
import { GET_PLAYS } from '../apollo/queries'
import Item from '../components/Item'

const maxLetter = 'O'
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
        {spliceIntoChunks(data.plays, 10).map((plays: any, idx: number) => {
          return (
            <div
              className="grid grid-play-area gap-3 mb-3"
              key={'subgrid_' + idx}
            >
              {plays &&
                plays.map((play: any, indx: number) => {
                  const letterGridElement = getGridAreaFromIndex(
                    indx,
                    maxLetter,
                  )
                  return (
                    <Item
                      key={'subgrid_item_' + indx}
                      id={play.id}
                      image_url={`${'https://multiverse-dev-directus.ov3mip.easypanel.host'}/assets/${
                        play.image.id
                      }`}
                      url={play.url}
                      body={play.body}
                      style={{ gridArea: letterGridElement }}
                    ></Item>
                  )
                })}
            </div>
          )
        })}
      </Container>
    </>
  )
}
