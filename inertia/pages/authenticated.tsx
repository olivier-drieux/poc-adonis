import { SharedProps } from '@adonisjs/inertia/types'
import { useForm } from '@inertiajs/react'

export default function Authenticated(props: SharedProps) {
  const { post } = useForm()

  return (
    <>
      <pre>{JSON.stringify(props)}</pre>
      <button onClick={() => post('/auth/logout')}>Logout</button>
    </>
  )
}
