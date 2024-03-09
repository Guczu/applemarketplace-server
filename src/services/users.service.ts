import { ServiceAPIResponse } from '../types/service-response'
import { User, UserData } from '../types/users'
import { pool } from '../database/connection'
import sha1 from 'sha1'

const getAll = async (): Promise<ServiceAPIResponse<User[]>> => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM users');
    const data: User[] = result.rows;
    client.release();

    return {
      statusCode: 200,
      body: data
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

const createUser = async (userData: UserData): Promise<ServiceAPIResponse<string>> => {
  try {
    const { nickname, email, password } = userData;
    const hash_password = sha1(password);
    const client = await pool.connect();
    const result = await client.query(
      'INSERT INTO users (email, nickname, active, hashed_password, rating) VALUES ($1, $2, true, $3, 0)',
      [email, nickname, hash_password]
    );
    client.release();

    return {
      statusCode: 201,
      body: "User created successfully"
    }

  } catch (error) {

    return {
      statusCode: 500,
      body: {
        error: (error as Error).message || 'Internal Server Error',
      },
    };

  }
}

export { getAll, createUser }