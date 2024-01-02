import Container from '@/app/components/Container'
import { GET_PLAYS_IMAGE, GET_PLAYS_TITLES } from '../apollo/queries'
import PlaysGrid from '../components/PlaysGrid'
import { fetcher } from '../apollo'

export default async function Play() {
  //@ts-ignore
  const { play_page } = await fetcher({
    query: GET_PLAYS_TITLES,
    variables: null,
  })    
  //@ts-ignore
  const { plays } = await fetcher({
    query: GET_PLAYS_IMAGE,
    variables: null,
  })
  return (
    <>
      <Container className="bg-black text-white">
        <PlaysGrid play_page={play_page} plays={plays} />
      </Container>
    </>
  )
}
