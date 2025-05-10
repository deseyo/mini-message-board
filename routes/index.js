const { Router } = require('express');
const messageController = require('../controllers/messageController');
const IndexRouter = Router();

IndexRouter.get('/', messageController.getMessages);

IndexRouter.get('/new', messageController.getForm);

IndexRouter.post('/new', messageController.postForm);

IndexRouter.get('/:messageId', messageController.getMessage);

module.exports = IndexRouter;