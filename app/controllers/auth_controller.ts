import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  async apiLogin({ request, auth, response }: HttpContext) {
    const { email, password } = request.only(['email', 'password'])
    const user = await User.verifyCredentials(email, password)
    await auth.use('web').login(user)
    return response.redirect('/authenticated')
  }

  async apiLogout({ auth, response }: HttpContext) {
    await auth.use('web').logout()
    return response.redirect('/')
  }

  async login({ auth, response, inertia }: HttpContext) {
    if (auth.isAuthenticated) {
      return response.redirect('/authenticated')
    }

    return inertia.render('login')
  }

  async authenticated({ inertia }: HttpContext) {
    return inertia.render('authenticated')
  }
}
