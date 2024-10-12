import UsersController from '#controllers/users_controller'
import { InferPageProps } from '@adonisjs/inertia/types'
import { Head } from '@inertiajs/react'

export default function UsersInfiniteScroll(props: InferPageProps<UsersController, 'index'>) {
    return (
        <>
            <Head title="Users table" />
            <h1>Users Infinite Scroll</h1>
            <pre>{JSON.stringify(props)}</pre>
        </>
    )
}