import { useForm } from '@inertiajs/react'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'

export default function CreateUser() {
    const { post, setData, errors, data } = useForm({
        fullName: '',
        email: '',
        password: '',
    })

    function onSubmit(e: any) {
        e.preventDefault()
        post('/users')
    }

    return (
        <form onSubmit={onSubmit} className="flex flex-col gap-2">
            <Input
                type="text"
                name="fullName"
                value={data.fullName}
                onChange={(e) => setData('fullName', e.target.value)}
            />
            {errors.fullName && <div>{errors.fullName}</div>}
            <Input
                type="email"
                name="email"
                value={data.email}
                onChange={(e) => setData('email', e.target.value)}
            />
            {errors.email && <div>{errors.email}</div>}
            <Input
                type="password"
                name="password"
                value={data.password}
                onChange={(e) => setData('password', e.target.value)}
            />
            {errors.password && <div>{errors.password}</div>}
            <Button type="submit">Create User</Button>
            <Button
                variant="outline"
                onClick={(e) => {
                    e.preventDefault()
                    const randomUser = Math.random().toString(36).substring(7)
                    setData({
                        fullName: randomUser,
                        email: `${randomUser}@email.fr`,
                        password: 'password',
                    })
                }}
            >
                Random User
            </Button>
        </form>
    )
}
