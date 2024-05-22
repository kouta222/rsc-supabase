'use client'
import { useRouter } from 'next/navigation'

const RefreshBtn = () => {
  const router = useRouter()

  return (
    <button
      className="rounded bg-indigo-600 py-1 font-medium"
      onClick={() => router.refresh()}
    >
      refresh
    </button>
  )
}

export default RefreshBtn
