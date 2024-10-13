import { Head, Link } from '@inertiajs/react'

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <Head title="Homepage" />
      <Link href="/authenticated">Authentication</Link>
      <Link href="/users">Users table</Link>
      <Link href="/users?infinite-scroll">Users infinite scroll</Link>
    </div>
  )
}
