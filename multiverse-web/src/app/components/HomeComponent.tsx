import Image from 'next/image'
import Astronauta from '../../../public/materiale/home/img1.png'
import Cane from '../../../public/materiale/home/img2.png'
import Mano from '../../../public/materiale/home/img3.png'
import Castello from '../../../public/materiale/home/img4.png'
import Draggable from './Draggable'

function HomeComponent() {
  return (
    <>
      <Draggable>
        <Image
          className="object-cover w-[9vh] md:w-[16vh] select-none pointer-events-none"
          quality={80}
          src={Astronauta}
          alt={''}
        />
      </Draggable>
      <Draggable>
        <Image
          className="object-cover w-[9vh] md:w-[16vh]  select-none pointer-events-none"
          src={Cane}
          quality={80}
          alt={''}
        />
      </Draggable>
      <Draggable>
        <Image
          className="object-cover  w-[9vh] md:w-[16vh] select-none pointer-events-none"
          src={Mano}
          alt={''}
          quality={80}
        />
      </Draggable>
      <Draggable>
        <Image
          className="object-cover w-[9vh] md:w-[16vh]  select-none pointer-events-none"
          src={Castello}
          quality={80}
          alt={''}
        />
      </Draggable>
    </>
  )
}
export default HomeComponent
