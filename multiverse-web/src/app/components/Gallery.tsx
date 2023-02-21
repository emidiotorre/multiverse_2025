import * as React from 'react'
import Masonry from 'react-masonry-component'

const masonryOptions = {
  fitWidth: false,
  columWidth: 300,
  gutter: 30,
  itemSelector: '.photo-item',
}

function Gallery(props: any) {
  return (
    <Masonry
      {...props}
      options={masonryOptions} // default {}
      disableImagesLoaded={false} // default false
      updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
    >
      {props.children}
    </Masonry>
  )
}

export default Gallery
