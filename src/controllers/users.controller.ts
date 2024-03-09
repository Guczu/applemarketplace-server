import { Request, Response } from 'express'

import * as usersService from '../services/users.service'

const getAll = async (req: Request, res: Response) => {
  try {
    const data = await usersService.getAll()

    res.status(data.statusCode).send(data.body)
  } catch (e: any) {
    res.status(500).send(e.message)
  }
}

const createUser = async (req: Request, res: Response) => {
  try {
    const data = await usersService.createUser(req.body);

    res.status(data.statusCode).send(data.body);
  } catch (e: any) {
    res.status(500).send(e.message)
  }
}

export { getAll, createUser }