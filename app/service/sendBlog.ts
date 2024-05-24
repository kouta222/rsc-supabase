import { Blog } from '../blogs/[blogid]/page'

const sendBlog = async (newItem: Blog) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/blogs`,
      {
        method: 'POST',
        headers: {
          apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItem),
      }
    )

    if (!response.ok) {
      const errorDetails = await response.json()
      throw new Error(
        `Failed to send blog: ${response.statusText}, Details: ${JSON.stringify(
          errorDetails
        )}`
      )
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Failed to send blog: ', error)
  }
}

export default sendBlog
