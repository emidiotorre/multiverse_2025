'use client'
import { useEffect, useState } from 'react'

const DateTime = () => {
  var [date, setDate] = useState(new Date())
  let str = '\u00B7'
  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()))
    return function cleanup() {
      clearInterval(timer)
    }
  })
  var dateFor =
    date.getUTCFullYear() +
    ' ' +
    (date.getUTCMonth() + 1).toString().padStart(2, '0') +
    ' ' +
    date.getUTCDate() +
    ' ' +
    str +
    ' ' +
    (date.getUTCHours() + 1).toString().padStart(2, '0') +
    ':' +
    date.getUTCMinutes().toString().padStart(2, '0') +
    ':' +
    date.getUTCSeconds().toString().padStart(2, '0') +
    ':' +
    date.getUTCMilliseconds().toString().padStart(3, '0')
  return (
    <div className="flex text-red-500 font-mono">
      <small className="px-2">
        {' '}
        {typeof window != 'undefined' && dateFor}{' '}
      </small>
    </div>
  )
}

export default DateTime
