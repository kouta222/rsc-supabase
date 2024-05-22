'use client'

import { useEffect, useState } from 'react'

export default function TimerCounter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev + 1)
    }, 500)
    return () => clearInterval(timer)
  }, [])

  return (
    <div>
      <p className="mt-6 text-center text-red-500">{count}</p>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}
