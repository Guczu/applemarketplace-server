require('dotenv').config();

const config = {
    database: {
      username: process.env.DB_USERNAME,
      host: process.env.DB_HOST,
      database: process.env.DB_DATABASE,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT,
      url: process.env.DATABASE_URL,
    },
    JwtSecret: process.env.JWT_SECRET
};
  
export default config;
  