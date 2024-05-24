'use client'

import { usePathname } from 'next/navigation'

const Rank = () => {
  const pathname = usePathname()
  return (
    <div>
      {pathname === '/nested-layout/nested2' ? (
        <p>Rank 1</p>
      ) : (
        <p>悲しいピヨ</p>
      )}
    </div>
  )
}

export default Rank
