import { Request, Response } from 'express'

import * as tokenService from '../services/token.service'

const createToken = async (req: Request, res: Response) => {
  try {
    const data = await tokenService.createToken(req.body);

    res.status(data.statusCode).send(data.body);
  } catch (e: any) {
    res.status(500).send(e.message)
  }
}

export { createToken }