'use client'
import { useEffect, useState } from 'react'

const DateTime = () => {
  var [date, setDate] = useState(new Date())

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000)
    return function cleanup() {
      clearInterval(timer)
    }
  })

  return (
    <div className="flex text-red-500">
      <p className="px-2 ">
        {' '}
        {typeof window != 'undefined' && date.toLocaleDateString()}{' '}
      </p>
      <p> {typeof window != 'undefined' && date.toLocaleTimeString()} </p>
    </div>
  )
}

export default DateTime
