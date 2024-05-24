import Link from 'next/link'
import type { Database } from '@/database.types'

type Blog = Database['public']['Tables']['blogs']['Row']

export const fetchBlogs = async () => {
  try {
    const res = await fetch(
      `https://sjxiixmouhnpomsfhvgh.supabase.co/rest/v1/blogs?select=*`,
      {
        headers: {
          apikey: process.env.apikey as string,
        },
        cache: 'no-store',
      }
    )

    if (!res.ok) {
      throw new Error('Failed to fetch blogs')
    }

    const blogs: Blog[] = await res.json()
    return blogs
  } catch (error) {
    console.log('Failed to fetch blogs' + error)
  }
}
