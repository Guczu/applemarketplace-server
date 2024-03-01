const { Pool } = require('pg');
import config from "../config/config";

const pool = new Pool({
    user: config.database.user,
    host: config.database.host,
    database: config.database.database,
    password: config.database.password,
    port: config.database.port
});

export { pool };