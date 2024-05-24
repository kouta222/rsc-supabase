// import { headers, cookies } from 'next/headers'
// import SupabaseListener from '../components/supabase-listener'
// // servercomponentでsupabaseを使うための関数
// import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'
// import type { Database } from '@/database.types'

// export default async function AuthLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   // ブラウザサイドのアクセストークンをサーバーサイドに渡すことができる。
//   const supabase = createServerComponentSupabaseClient<Database>({
//     headers,
//     cookies,
//   })
//   const {
//     data: { session },
//   } = await supabase.auth.getSession()

//   return (
//     <>
//       <SupabaseListener accessToken={session?.access_token} />
//       {children}
//     </>
//   )
// }
