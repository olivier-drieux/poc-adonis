import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class SessionController {
  async login({ request, auth, response }: HttpContext) {
    const { email, password } = request.only(['email', 'password'])
    const user = await User.verifyCredentials(email, password)
    await auth.use('web').login(user)
    return response.redirect('/authenticated')
  }

  async logout({ auth, response }: HttpContext) {
    await auth.use('web').logout()
    return response.redirect('/')
  }
}
