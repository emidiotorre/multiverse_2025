import React from 'react'

function Container(props: any) {
  return (
    <div className="w-full px-2 md:px-10 mx-auto" {...props}>
      {props.children}
    </div>
  )
}

export default Container
