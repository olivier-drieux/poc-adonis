import UsersController from '#controllers/users_controller'
import { InferPageProps } from '@adonisjs/inertia/types'
import { Head, usePoll } from '@inertiajs/react'

export default function UsersTable(props: InferPageProps<UsersController, 'table'>) {
    usePoll(5000)
    return (
        <div className="flex-1 m-auto">
            <Head title="Users table" />
            <h1>Users Table</h1>
            <pre>{JSON.stringify(props, null, 4)}</pre>
        </div>
    )
}
