import Link from 'next/link'
import { fetchBlogs } from '../components/blog-list-static'
import RouterButton from '../components/router'

const page = async () => {
  const blogs = await fetchBlogs()
  return (
    <div className="text-center">
      <RouterButton destination="" />
    </div>
  )
}

export default page
