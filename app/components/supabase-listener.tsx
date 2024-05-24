'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import supabase from '@/utils/supabase'
import useStore from '@/store'

export default function SupabaseListener({
  accessToken,
}: {
  accessToken?: string
}) {
  const router = useRouter()
  const { updateLoginUser } = useStore()

  useEffect(() => {
    const getUserInfo = async () => {
      const { data } = await supabase.auth.getSession()
      //   userのセッション情報を取得する

      if (data.session) {
        updateLoginUser({
          id: data.session?.user.id,
          email: data.session?.user.email,
        })
      }
    }
    getUserInfo()

    supabase.auth.onAuthStateChange((_, session) => {
      updateLoginUser({ id: session?.user.id, email: session?.user.email })

      //   propsで受け取ったサーバーサイドのaccessTokenとクライアントサイドのaccesstokenを見比べる
      if (session?.access_token !== accessToken) {
        router.refresh()
      }
    })
  }, [accessToken, updateLoginUser])

  return null
}
