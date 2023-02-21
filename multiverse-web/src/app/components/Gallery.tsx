import * as React from 'react'
import Masonry from 'react-masonry-component'

const masonryOptions = {
  fitWidth: false,
  columnWidth: 300,
  gutter: 30,
  itemSelector: '.photo-item',
}

function Gallery(props: any) {
  return (
    <Masonry
      elementType={'ul'}
      className={'photo-list'}
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
