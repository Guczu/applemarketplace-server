const { Pool } = require('pg');
import config from "../config/config";
const connectionString = config.database.url;

const pool = new Pool({
    connectionString,
});

export { pool };