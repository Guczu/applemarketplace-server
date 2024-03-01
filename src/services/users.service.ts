import { ServiceAPIResponse } from '../types/service-response'
import { User } from '../types/users'
import { pool } from '../database/connection';

const getAll = async (): Promise<ServiceAPIResponse<User[]>> => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM marketplace.users');
    const data: User[] = result.rows;
    client.release();

    return {
      statusCode: 200,
      body: data,
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

export { getAll }