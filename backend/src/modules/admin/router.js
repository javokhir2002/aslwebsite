import express from 'express'
import controller from './controller.js'

// Router
const router = express.Router()

// Router methods

router.get('/admins', controller.get)
      .post('/admins', controller.post)
      .put('/admins', controller.put)
      .delete('/admins', controller.delete)
      .post('/login', controller.login)
      
      
export default router