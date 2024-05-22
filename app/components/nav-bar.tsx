import Link from 'next/link'

const NavBar = () => {
  return (
    <header className="bg-gray-800 p-4">
      <nav className="space-x-4">
        <Link
          href="/#setting"
          className="rounded bg-gray-700 px-3 py-4 text-white hover:bg-gray-500"
        >
          Home
        </Link>
        <Link
          href="/blogs"
          className="rounded bg-gray-700 px-3 py-4 text-white hover:bg-gray-500"
        >
          Nested Layout with Blogs
        </Link>
        <Link
          href="/streaming-sr"
          className="rounded bg-gray-700 px-3 py-4 text-white hover:bg-gray-500"
        >
          Steaming Sr
        </Link>
        <Link
          href="/auth"
          className="rounded bg-gray-700 px-3 py-4 text-white hover:bg-gray-500"
        >
          Auth with CRUD
        </Link>
      </nav>
    </header>
  )
}

export default NavBar
