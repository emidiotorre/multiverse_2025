import * as React from "react";
import Masonry from "react-masonry-component";

const masonryOptions = {
  fitWidth: false,
  columnWidth: 300,
  gutter: 10,
  itemSelector: ".photo-item",
};

type Props = {
  children?: React.ReactNode;
  style?: any;
};
function Gallery(props: any) {
  return (
    <Masonry
      {...props}
      className={"photo-list"}
      elementType={"ul"}
      options={masonryOptions} // default {}
      disableImagesLoaded={false} // default false
      updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
    >
      {props.children}
    </Masonry>
  );
}

export default Gallery;
