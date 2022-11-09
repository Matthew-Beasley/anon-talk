
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

app.use(cors());
app.use('/dist', express.static(path.join(__dirname, 'dist')));

app.get('/testhtml', (req, res, next) => {
    res.sendFile(path.join(__dirname, '/index2.html'))
})

// If no other routes are hit, send the React app
app.use((req, res) => res.sendFile(path.join(__dirname, '/index.html')));

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
    });
  });

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

server.listen(process.env.PORT, () => console.log('Listening on PORT ', process.env.PORT));