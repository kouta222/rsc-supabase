export default function FirstLayout({
  // page.tsxの内容がchildrenに入る
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="text-center">
      <p>Layout 1</p>
      {children}
    </main>
  )
}
