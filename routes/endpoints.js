const { default: axios } = require('axios');
const express = require('express');
const endpointRouter = express.Router();
const { createUser, createMessage, getMessages } = require('./mongo/methods')

endpointRouter.post('/user', async (req, res, next) => {
  try {
    const val = await createUser(req.body);
    res.status(200).send(val);
  } catch (error) {
    next(error);
  }   
});

endpointRouter.get('/user', async () => {
  try {
    const users = await getUsers();
    res.status(200).send(users);
  } catch (error) {
    next(error);
  }
})

endpointRouter.post('/message', async (req, res, next) => {
  try {
    const val = await createMessage(req.body);
    console.log('val from post endpoint:   ', val)
    res.status(200).send(val);
  } catch (error) {
    next(error);
  }   
});

endpointRouter.get('/message', async (req, res, next) => {
  const messages = await getMessages();
  try {
    res.status(200).send(messages);
  } catch (error) {
    next(error);
  }
});

module.exports = endpointRouter;