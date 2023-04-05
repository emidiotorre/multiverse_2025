'use client'
import { motion } from 'framer-motion'
import { ReactNode, useEffect, useRef } from 'react'
import { useWindowSize } from 'usehooks-ts'

type Props = {
  children?: ReactNode
}

function Draggable(props: Props) {
  const html = typeof document != 'undefined' ? document.documentElement : null
  const docRef = useRef(html)
  const { width, height } = useWindowSize()
  const positionLeft = Math.random() * width * 0.75
  const positionTop = Math.random() * height * 0.75
  console.log(positionLeft, positionTop)
  if (typeof document === 'undefined') return <div>{props.children}</div>
  return (
    <motion.div
      style={{ userSelect: 'none' }}
      dragConstraints={docRef}
      drag={true}
      onClick={(e) => e.stopPropagation()}
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.5 },
        cursor: 'grab',
      }}
      whileTap={{ scale: 0.9 }}
      initial={{
        zIndex: 100,
        position: 'absolute',
        left: positionLeft,
        top: positionTop,
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

export default Draggable
