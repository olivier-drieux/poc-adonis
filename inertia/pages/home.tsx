import { Head, Link } from '@inertiajs/react'

export default function Home() {
    return (
        <div className='flex flex-col gap-8'>
            <Head title="Homepage" />
            <Link href='/users'>
                Users table
            </Link>
            <Link href='/users?infinite-scroll'>
                Users infinite scroll
            </Link>
        </div>
    )
}