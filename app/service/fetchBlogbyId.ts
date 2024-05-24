import { type } from 'os'
import { PageProps } from '../blogs/[blogid]/page'

const fetchBlogbyId = async (id: PageProps) => {
  const res = await fetch(
    `https://sjxiixmouhnpomsfhvgh.supabase.co/rest/v1/blogs?select=${id}`,
    {
      headers: {
        apikey: process.env.apikey as string,
        'Content-type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
      },
      cache: 'no-cache',
    }
  )
  if (!res.ok) {
    throw new Error('Failed to fetch blog')
  }

  const blog = await res.json()
  return blog[0]
}

export default fetchBlogbyId
