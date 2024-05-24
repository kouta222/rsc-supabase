'use client'

import { useRouter } from 'next/navigation'

export default function RouterButton({
  destination = '',
}: {
  destination: string
}) {
  const router = useRouter()
  return (
    <button
      onClick={() => router.push(`/${destination}`)}
      className="text-white bg-indigo-500 p-2 rounded-md"
    >
      Nav to {destination ? destination : 'home'}
    </button>
  )
}
