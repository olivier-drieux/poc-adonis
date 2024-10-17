import { Head, Link } from '@inertiajs/react'
import { Button, Stack } from '@mantine/core'

export default function Home() {
  return (
    <Stack h="100dvh" align="center" justify="center">
      <Head title="Homepage" />
      <Button>
        <Link href="/authenticated">Authentication</Link>
      </Button>
      <Button>
        <Link href="/users">Users table</Link>
      </Button>
      <Button>
        <Link href="/users?infinite-scroll">Users infinite scroll</Link>
      </Button>
    </Stack>
  )
}
