'use client'

import { Suspense, useEffect, useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>{count}</h1>

      <div>
        <button onClick={() => setCount(count + 1)}>Increace</button>
      </div>
      <div>
        <button onClick={() => setCount(count - 1)}>decreace</button>
      </div>
    </>
  )
}

export default Counter
