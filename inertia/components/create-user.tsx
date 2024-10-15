import { useForm } from "@inertiajs/react"

export default function CreateUser() {
    const randomUser = Math.random().toString(36).substring(7)
    const { post } = useForm({
        fullName: randomUser,
        email: `${randomUser}@email.fr`,
        password: 'password',
      })

      function submit(e: any) {
        e.preventDefault()
        post('/users')
      }

      return (
          <form onSubmit={submit} className="flex flex-col gap-2">
            <input type="text" name="fullName" />
            <input type="email" name="email" />
            <input type="password" name="password" />
            <button type='submit'>Create User</button>
          </form>
      )
}
