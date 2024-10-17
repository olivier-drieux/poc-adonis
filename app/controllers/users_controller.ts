import User from '#models/user'
import { createUserValidator } from '#validators/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
    async table({ inertia }: HttpContext) {
        return inertia.render('users/table', { users: () => User.all() })
    }

    async infinite({ inertia }: HttpContext) {
        return inertia.render('users/infinite-scroll', {
            users: () => User.all(),
        })
    }

    async create({ inertia }: HttpContext) {
        return inertia.render('users/create/create')
    }

    async store({ request, response }: HttpContext) {
        User.create(await request.validateUsing(createUserValidator))

        response.redirect().toRoute('users.index')
    }
}
