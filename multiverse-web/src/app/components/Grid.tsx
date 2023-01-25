'use client'

import React from 'react'
import { FrameGrid } from '@egjs/react-grid'

const Grid = ({ children }: { children: React.ReactNode }) => {
  return (
    <FrameGrid
      className="container"
      gap={4}
      defaultDirection={'end'}
      frame={[
        [1, 1, 2, 2],
        [1, 1, 3, 3],
        [1, 1, 4, 4],
      ]}
      rectSize={0}
      useFrameFill={true}
    >
      {children}
    </FrameGrid>
  )
}

export default Grid
