import Image from 'next/image'
import { NoteList } from './components/NoteList'
import TimerCounter from './components/timeCounter'
import { Suspense } from 'react'
import Loading from './loading'
import RefreshBtn from './components/refreshBtn'
import Counter from './components/Counter'

export default function Home() {
  return (
    <main>
      <div className="text-center">Hello World</div>
      {/* suspense */}
      <Suspense fallback={<Loading />}>
        <NoteList />
        <RefreshBtn />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Counter />
      </Suspense>
      <TimerCounter />
    </main>
  )
}
