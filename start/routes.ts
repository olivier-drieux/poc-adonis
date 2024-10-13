/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const UsersController = () => import('#controllers/users_controller')
const SessionController = () => import('#controllers/session_controller')
import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

router.resource('/users', UsersController).only(['index', 'store'])
router.post('/auth/login', [SessionController, 'store'])
router.on('/').renderInertia('home')
router.on('/authenticated').renderInertia('authenticated').use(middleware.auth())
router.on('/login').renderInertia('login')
