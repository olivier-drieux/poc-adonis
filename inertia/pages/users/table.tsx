import UsersController from '#controllers/users_controller'
import { InferPageProps } from '@adonisjs/inertia/types'
import { Head, usePoll } from '@inertiajs/react'
import CreateUser from '~/components/create-user'

export default function UsersTable(props: InferPageProps<UsersController, 'index'>) {
    usePoll(2000);
    return (
        <>
            <Head title="Users table" />
            <h1>Users Table</h1>
            <pre>{JSON.stringify(props, null, 4)}</pre>
            <CreateUser />
        </>
    )
}
