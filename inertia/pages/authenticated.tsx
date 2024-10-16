import { SharedProps } from '@adonisjs/inertia/types'
import { useForm } from '@inertiajs/react'

export default function Authenticated(props: SharedProps) {
    const { post } = useForm()

    return (
        <>
            <pre>{JSON.stringify(props, null, 4)}</pre>
            <button onClick={() => post('/api/logout')}>Logout</button>
        </>
    )
}
