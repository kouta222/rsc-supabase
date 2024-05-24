import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Database } from '@/database.types'
import fetchBlogbyId from '@/app/service/fetchBlogbyId'
import FormInput from './FormInput'
import RouterButton from '@/app/components/router'
import RefreshBtn from '@/app/components/refreshBtn'

export type Blog = Database['public']['Tables']['blogs']['Row']

export type PageProps = {
  blogid: string
}

const page = async (params: PageProps) => {
  console.log(params, 'params')
  const blog: Blog = await fetchBlogbyId(params)
  if (!blog) return notFound()
  // idは取得できるから、idでblogを取得する関数を作らないといけない？
  return (
    <>
      <RefreshBtn />
      <div className="text-center">{blog.tittle}</div>
      <div className="text-center">{blog.id}</div>
      <div className="text-center">{blog.content}</div>
      <div className="text-center">{blog.created_at}</div>
      <FormInput />
    </>
  )
}

export default page
