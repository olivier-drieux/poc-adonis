import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  /**
   * Display a list of resource
   */
  async index({ inertia, request }: HttpContext) {
    const props = {
      users: () => User.all(),
    }

    if ('infinite-scroll' in request.qs()) {
      return inertia.render('users/infinite-scroll', props)
    }

    return inertia.render('users/table', props)
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    const user = new User()
    user.fullName = request.input('fullName')
    user.email = request.input('email')
    user.password = request.input('password')

    await user.save()
  }
}
