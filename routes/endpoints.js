const express = require('express');
const endpointRouter = express.Router();
const { createUser, createMessage } = require('./mongo/methods')

endpointRouter.post('/user', async (req, res, next) => {
  try {
    const val = await createUser(req.body);
    res.status(200).send(val);
  } catch (error) {
    next(error);
  }   
});

endpointRouter.post('/message', async (req, res, next) => {
  try {
    const val = await createMessage(req.body);
    res.status(200).send(val);
  } catch (error) {
    next(error);
  }   
});

module.exports = endpointRouter;