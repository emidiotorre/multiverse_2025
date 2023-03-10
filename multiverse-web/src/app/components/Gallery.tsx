'use client'
import * as React from 'react'
import Masonry from 'react-masonry-component'

const masonryOptions = {
  //percentPosition: true,
  fitWidth: true,
  columnWidth: 100,
  rowHeight: 60,
  gutter: 30,
  draggable: true,
  resize: true,
}

function Gallery(props: any) {
  return (
    <Masonry
      //onLayoutComplete={}
      {...props}
      className="pt-[23rem] md:pt-[30rem] pl-16"
      elementType={'div'}
      options={masonryOptions} // default {}
      disableImagesLoaded={false} // default false
      updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
      enableResizableChildren={true}
    >
      {props.children}
    </Masonry>
  )
}

export default Gallery
