import Image from 'next/image'
import Book from '../../../public/materiale/home/book.png'
import Hand_ from '../../../public/materiale/home/hand.png'
import Shuttle from '../../../public/materiale/home/shuttle.png'
import Tower from '../../../public/materiale/home/tower.png'
import Draggable from './Draggable'

function HomeComponent() {
  return (
    <>
      <Draggable>
        <Image
          className="object-cover w-[9vh] md:w-[16vh] select-none pointer-events-none"
          quality={80}
          src={Book}
          alt={''}
        />
      </Draggable>
      <Draggable>
        <Image
          className="object-cover w-[9vh] md:w-[16vh]  select-none pointer-events-none"
          src={Hand_}
          quality={80}
          alt={''}
        />
      </Draggable>
      <Draggable>
        <Image
          className="object-cover  w-[9vh] md:w-[16vh] select-none pointer-events-none"
          src={Shuttle}
          alt={''}
          quality={80}
        />
      </Draggable>
      <Draggable>
        <Image
          className="object-cover w-[9vh] md:w-[16vh]  select-none pointer-events-none"
          src={Tower}
          quality={80}
          alt={''}
        />
      </Draggable>
    </>
  )
}
export default HomeComponent
