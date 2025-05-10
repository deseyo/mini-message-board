const pool = require('./pool'); 

const getAllMessages = async () => {
  const { rows } = await pool.query('SELECT * FROM messages');
  return rows;
}

const insertMessage = async (username, message, added) => {
  await pool.query('INSERT INTO messages (username, message, added) VALUES ($1, $2, $3)', [username, message, added]);
}

const getIdMessage = async (index) => {
  const { rows } = await pool.query('SELECT * FROM messages WHERE id = $1', [index]);
  return rows[0];
}

module.exports = {
  getAllMessages,
  insertMessage,
  getIdMessage
}