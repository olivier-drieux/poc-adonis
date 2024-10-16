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
router.resource('/users', UsersController)

// Auth routes
router.get('/login', [AuthController, 'login'])
router.get('/authenticated', [AuthController, 'authenticated']).use(middleware.auth())

// API routes
router
  .group(() => {
    router.post('/login', [AuthController, 'apiLogin'])
    router.post('/logout', [AuthController, 'apiLogout']).use(middleware.auth())
  })
  .prefix('/api')
