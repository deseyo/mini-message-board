const { Router } = require('express');
const IndexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


IndexRouter.get('/', (req, res) => {
  res.render('index', { messages: messages });
});

IndexRouter.get('/new', (req, res) => {
  res.render('form')
});

IndexRouter.post('/new', (req, res) => {
  const { textMessage, textUser } = req.body;
  messages.push({ text: textMessage, user: textUser, added: new Date() });
  res.redirect('/');
});

IndexRouter.get('/:messageId', (req, res) => {
  const index = req.params.messageId;
  res.render('message', { message: messages[index] })
})

module.exports = IndexRouter;