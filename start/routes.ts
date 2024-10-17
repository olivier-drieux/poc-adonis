/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const UsersController = () => import('#controllers/users_controller')
const AuthController = () => import('#controllers/auth_controller')
import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

router.on('/').renderInertia('home')

// User routes
router
    .group(() => {
        router.get('', ({ response }) => response.redirect().toRoute('users.table')).as('index')
        router.get('table', [UsersController, 'table']).as('table')
        router.get('infite', [UsersController, 'infinite']).as('infinite')
        router.get('create', [UsersController, 'create']).as('create')
        router.post('', [UsersController, 'store']).as('store')
    })
    .prefix('users')
    .as('users')

// Auth routes
router.get('/login', [AuthController, 'login']).use(middleware.guest())
router.get('/authenticated', [AuthController, 'authenticated']).use(middleware.auth())

// API routes
router
    .group(() => {
        router.post('/login', [AuthController, 'apiLogin']).use(middleware.guest())
        router.post('/logout', [AuthController, 'apiLogout']).use(middleware.auth())
    })
    .prefix('/api')
