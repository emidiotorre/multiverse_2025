import * as React from 'react'
import Masonry from 'react-masonry-component'

const masonryOptions = {
  fitWidth: false,
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
      className="pt-40 px-5 mx-auto"
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
