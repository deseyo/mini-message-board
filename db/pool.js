const { Pool } = require('pg');

const isProduction = process.env.NODE_ENV === 'production';
const connectionString = process.env.DATABASE_URL;

module.exports = new Pool({
  connectionString,
  ssl: isProduction ? { rejectUnauthorized: false } : false
})