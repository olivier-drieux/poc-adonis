import { Head, Link } from '@inertiajs/react'
import { Button } from '~/components/ui/button'

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center gap-2 flex-1">
            <Button asChild>
                <Head title="Homepage" />
            </Button>
            <Button asChild>
                <Link href="/authenticated">Authentication</Link>
            </Button>
            <Button asChild>
                <Link href="/users/table">Users table</Link>
            </Button>
            <Button asChild>
                <Link href="/users/scroll">Users infinite scroll</Link>
            </Button>
            <Button asChild>
                <Link href="/users/create">Create User</Link>
            </Button>
        </div>
    )
}
