'use client'
import { motion } from 'framer-motion'
import { ReactNode, useRef } from 'react'

type Props = {
  children?: ReactNode
}

function Draggable(props: Props) {
  const html = typeof document != 'undefined' ? document.documentElement : null
  const docRef = useRef(html)
  if (typeof document === 'undefined') return <div>{props.children}</div>
  const rect =
    typeof window != 'undefined'
      ? { height: window.innerHeight, width: window.innerWidth }
      : { height: 0, width: 0 }
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
        left: Math.random() * rect.width * 0.75,
        top: Math.random() * rect.height * 0.75,
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
