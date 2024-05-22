import type { Database } from '@/database.types'
import next from 'next'
import { resolve } from 'path'
// import { format } from 'data-fns'

// import {}'data-fns'

type Note = Database['public']['Tables']['note']['Row']

async function fetchNotes() {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  try {
    const res = await fetch(
      'https://sjxiixmouhnpomsfhvgh.supabase.co/rest/v1/note?select=*',
      {
        headers: {
          apikey: process.env.apikey as string,
        },
        // dynamic rendering
        cache: 'no-store',
        next: { revalidate: 0 },
      }
    )
    if (!res.ok) {
      throw new Error('Failed to fetch notes')
    }
    const notes: Note[] = await res.json()
    return notes
  } catch (error) {
    throw new Error('Failed to fetch notes' + error)
  }
}

export const NoteList = async () => {
  const notes = await fetchNotes()
  return (
    <div>
      <p className="my-4 pb-3 text-xl font-medium underline underline-offset-4">
        Notes
      </p>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <p>{note.titile}</p>
            <p>
              <strong>Created at:</strong>
              {/* {note && format(new Date(note.created_at), 'yyyy-MM-dd HH:mm:ss')} */}
              {note.created_at}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
