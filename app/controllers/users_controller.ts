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
   * Display form to create a new record
   */
  async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    const user = new User()
    user.fullName = request.input('fullName')
    user.email = request.input('email')
    user.password = request.input('password')

    await user.save()

    response.redirect().withQs({ 'infinite-scroll': true }).toRoute('users.index')
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {}

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}
