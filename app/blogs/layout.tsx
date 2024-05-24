import Link from 'next/link'
import { fetchBlogs } from '../components/blog-list-static'
import RouterButton from '../components/router'
import { Flamenco } from 'next/font/google'

const page = async ({ children }: { children: React.ReactNode }) => {
  const blogs = await fetchBlogs()
  return (
    <section>
      <aside>
        <div>
          <RouterButton destination="" />
          {blogs?.map((blog) => {
            return (
              <ul key={blog.id}>
                <Link href={`/blogs/${blog.id}`}>
                  <li>{blog.tittle}</li>
                </Link>
              </ul>
            )
          })}
        </div>
        {children}
      </aside>
    </section>
  )
}

export default page
