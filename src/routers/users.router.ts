import express from 'express';
import * as usersController from '../controllers/users.controller'
import { Express } from 'express';

const usersRouter = (router: Express) => {
    router.get('/users', usersController.getAll)
}

export { usersRouter }