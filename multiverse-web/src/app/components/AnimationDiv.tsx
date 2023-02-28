import { motion, MotionValue } from 'framer-motion'
import { ReactNode, RefObject, useRef } from 'react'

type Props = {
  children?: ReactNode | MotionValue<number> | MotionValue<string>
  myRef?: RefObject<HTMLDivElement>
}

const AnimationDiv = (props: Props) => {
  const html = document.documentElement
  const docRef = useRef(html)

  return (
    <motion.div
      dragConstraints={docRef}
      style={{ position: 'absolute', zIndex: 100, height: 200, width: 200 }}
      drag
      onClick={(e) => e.stopPropagation()}
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.5 },
      }}
      whileTap={{ scale: 0.9 }}
      initial={{
        opacity: 0,
      }}
      whileDrag={{ scale: 1.2 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 2,
          type: 'spring',
        },
      }}
      exit={{ opacity: 1 }}
    >
      {props.children}
    </motion.div>
  )
}

export default AnimationDiv
