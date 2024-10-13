import { Head, useForm } from '@inertiajs/react'

export default function Login() {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
    password: '',
    remember: false,
  })

  function submit(e: React.FormEvent) {
    e.preventDefault()
    post('/auth/login')
  }

  return (
    <form className="flex flex-col gap-8" onSubmit={submit}>
      <Head title="Login" />
      <h1>Login</h1>
      <div>
        <input type="text" value={data.email} onChange={(e) => setData('email', e.target.value)} />
        {errors.email && <div>{errors.email}</div>}
      </div>
      <div>
        <input
          type="password"
          value={data.password}
          onChange={(e) => setData('password', e.target.value)}
        />
        {errors.password && <div>{errors.password}</div>}
      </div>
      <div>
        <input
          type="checkbox"
          checked={data.remember}
          onChange={(e) => setData('remember', e.target.checked)}
        />{' '}
        Remember Me
      </div>
      <button type="submit" disabled={processing}>
        Login
      </button>
    </form>
  )
}
