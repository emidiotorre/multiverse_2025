import React from 'react'

function Container(props: any) {
  return (
    <div
      {...props}
      className={'w-full px-2 md:px-10 mx-auto ' + props.className}
    >
      {props.children}
    </div>
  )
}

export default Container
