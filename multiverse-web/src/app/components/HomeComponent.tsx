import Image from 'next/image'
import ImgU from '../../../public/materiale/home/img1.png'
import ImgD from '../../../public/materiale/home/img2.png'
import ImgT from '../../../public/materiale/home/img3.png'
import ImgQ from '../../../public/materiale/home/img4.png'
import Draggable from './Draggable'

function HomeComponent() {
  return (
    <>
      <Draggable>
        <Image
          style={{
            pointerEvents: 'none',
          }}
          className="object-cover w-[8vh] md:w-[16vh]"
          quality={100}
          src={ImgU}
          alt={''}
        />
      </Draggable>
      <Draggable>
        <Image
          style={{
            pointerEvents: 'none',
          }}
          className="object-cover w-[8vh] md:w-[16vh]"
          src={ImgD}
          quality={100}
          alt={''}
        />
      </Draggable>
      <Draggable>
        <Image
          style={{
            pointerEvents: 'none',
          }}
          className="object-cover  w-[8vh] md:w-[16vh]"
          src={ImgT}
          alt={''}
          quality={100}
        />
      </Draggable>
      <Draggable>
        <Image
          style={{
            pointerEvents: 'none',
          }}
          className="object-cover w-[8vh] md:w-[16vh] "
          src={ImgQ}
          quality={100}
          alt={''}
        />
      </Draggable>
    </>
  )
}
export default HomeComponent
