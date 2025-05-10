const db = require('../db/queries');

const getMessages = async (req, res) => {
  const messages = await db.getAllMessages();
  res.render('index', { messages: messages });
}

const getForm = (req, res) => {
  res.render('form')
}

const postForm = async (req, res) => {
  const { textUsername, textMessage } = req.body;
  const nowDate = new Date().toISOString().replace('T', ' ').slice(0, 19);
  await db.insertMessage(textUsername, textMessage, nowDate);
  res.redirect('/');
}

const getMessage = async (req, res) => {
  const message = await db.getIdMessage(req.params.messageId);
  res.render('message', { message: message })
}

module.exports = {
  getMessages,
  getForm,
  postForm,
  getMessage
}