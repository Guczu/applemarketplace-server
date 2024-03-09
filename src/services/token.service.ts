import { ServiceAPIResponse } from '../types/service-response'
import { User } from '../types/users'
import { pool } from '../database/connection'
import jwt from 'jsonwebtoken'
import config from '../config/config'


const createToken = async (user: User): Promise<ServiceAPIResponse<string>> => {
  try {
    const access = 'auth';
    const secret: string = config.JwtSecret || "secret";
    const date = new Date(new Date().toISOString());
    const type = "authorization";
    const { id } = user;

    const userData = {
        userId: user.id,
        nickname: user.nickname,
        access: access
    };

    const value = jwt.sign(
        userData,
        secret,
        {
            expiresIn: '3h'
        }
    );

    const client = await pool.connect();
    const result = await client.query(
      'INSERT INTO user_auth (user_id, type, value, date) VALUES ($1, $2, $3, $4)',
      [id, type, value, date]
    );
    client.release();

    return {
      statusCode: 201,
      body: "Token created successfully"
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: {
        error: (error as Error).message || 'Internal Server Error',
      },
    };
  }
}

export { createToken }