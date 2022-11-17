
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const endpointRouter = require('./routes/endpoints');
const { urlencoded } = require('express');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use('/endpoints', endpointRouter);
app.use((req, res) => res.sendFile(path.join(__dirname, '/index.html')));

app.use((req, res, next) => {
  next({
    status: 404,
    message: `Page not found for ${req.method} ${req.url}`,
  });
});
app.use((err, req, res, next) => {
  res.status(err.status || 500).send({
    message: err.message || JSON.stringify(err),
  });
});

app.listen(process.env.PORT, () => console.log('Listening on PORT ', process.env.PORT));