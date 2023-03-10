'use client'
import * as React from 'react'
import Masonry, {
  MasonryOptions,
  MasonryPropTypes,
} from 'react-masonry-component'
import { useWindowSize } from 'usehooks-ts'

function Gallery(props: any) {
  const { width, height } = useWindowSize()
  const [masonryOptions, setMasonryOprions] = React.useState<MasonryOptions>({
    //percentPosition: true,
    fitWidth: true,
    columnWidth: 100,
    gutter: 20,
    resize: true,
    transitionDuration: 0,
  })

  React.useLayoutEffect(() => {
    setMasonryOprions({
      //percentPosition: true,
      fitWidth: true,
      columnWidth: width > 1000 ? 50 : width,
      gutter: 20,
      resize: true,
      transitionDuration: 0,
    })
  }, [width])
  return (
    <div className="relative flex justify-center ml-8 md:ml-0 md:mt-8">
      <Masonry
        //onLayoutComplete={}
        {...props}
        className="relative h-auto"
        elementType={'div'}
        options={masonryOptions} // default {}
        disableImagesLoaded={false} // default false
        updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
        enableResizableChildren={true}
      >
        {props.children}
      </Masonry>
    </div>
  )
}

export default Gallery
