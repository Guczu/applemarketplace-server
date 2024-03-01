require('dotenv').config();

const config = {
    database: {
      user: process.env.DB_USERNAME,
      host: process.env.DB_HOST,
      database: process.env.DB_DATABASE,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT
    }
};
  
export default config;
  