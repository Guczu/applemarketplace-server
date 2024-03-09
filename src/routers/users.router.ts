import * as usersController from '../controllers/users.controller'
import { Express } from 'express';

const usersRouter = (router: Express) => {
    router.get('/users', usersController.getAll)
    router.post('/users/create', usersController.createUser)
}

export { usersRouter }