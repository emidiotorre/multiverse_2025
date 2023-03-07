'use client'
import * as React from 'react'
import Masonry from 'react-masonry-component'

const masonryOptions = {
  fitWidth: true,
  columnWidth: 60,
  rowHeight: 60,
  gutter: 20,
  draggable: true,
  itemSelector: '.grid-item',
}

function Gallery(props: any) {
  return (
    <Masonry
      {...props}
      className="pt-40 pl-12"
      elementType={'div'}
      options={masonryOptions} // default {}
      disableImagesLoaded={false} // default false
      updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
    >
      {props.children}
    </Masonry>
  )
}

export default Gallery
