import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  async apiLogin({ request, auth, response }: HttpContext) {
    const { email, password, remember } = request.only(['email', 'password', 'remember'])
    const user = await User.verifyCredentials(email, password)
    await auth.use('web').login(user, !!remember)

    return response.redirect('/authenticated')
  }

  async apiLogout({ auth, response }: HttpContext) {
    await auth.use('web').logout()

    return response.redirect('/')
  }

  async login({ inertia }: HttpContext) {
    return inertia.render('login')
  }

  async authenticated({ inertia }: HttpContext) {
    return inertia.render('authenticated')
  }
}
