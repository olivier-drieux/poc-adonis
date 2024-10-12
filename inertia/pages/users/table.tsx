import UsersController from '#controllers/users_controller'
import { InferPageProps } from '@adonisjs/inertia/types'
import { Head } from '@inertiajs/react'

export default function UsersTable(props: InferPageProps<UsersController, 'index'>) {
    return (
        <>
            <Head title="Users table" />
            <h1>Users Table</h1>
            <pre>{JSON.stringify(props)}</pre>
        </>
    )
}