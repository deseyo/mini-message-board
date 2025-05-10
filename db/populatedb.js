#! /usr/bin/env node
require('dotenv').config();
const { Client } = require('pg');

const nowDate = new Date().toISOString().replace('T', ' ').slice(0, 19);

const SQL = `
  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR (255),
    message TEXT,
    added TIMESTAMP
  );
`;

const insertSQL = `
  INSERT INTO messages (username, message, added) VALUES 
    ($1, $2, $3),
    ($4, $5, $6),
    ($7, $8, $9);
`;

const values = [
  'Mark', 'Hello world 1', nowDate,
  'Frank', 'Hello world 2', nowDate,
  'Bob', 'Hello world 3', nowDate
];

console.log(process.env.DB_HOST);
console.log(process.env.DB_USER);
console.log(process.env.DB_DATABASE);
console.log(process.env.DB_PASSWORD);
console.log(typeof process.env.DB_PORT);

const main = async () => {
  console.log('seeding...');
  const client = new Client({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT)
  });
  await client.connect();
  await client.query(SQL);
  await client.query(insertSQL, values);
  await client.end();
  console.log('done');
}

main();