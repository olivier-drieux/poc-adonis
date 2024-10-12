/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const UsersController = () => import('#controllers/users_controller')
import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

router.resource('/users', UsersController) //.use('*', middleware.auth())
router.on('/').renderInertia('home')
router.on('/login').renderInertia('login')
