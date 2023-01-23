import React from 'react'

type Props = {
  children: React.ReactNode
}

function Container({ children }: Props) {
  return <div className="w-full max-w-screen-2xl px-2 mx-auto">{children}</div>
}

export default Container
