import * as tokenController from '../controllers/token.controller'
import { Express } from 'express';

const tokenRouter = (router: Express) => {
    router.post('/token/create', tokenController.createToken)
}

export { tokenRouter }