import express from 'express';
const app = express();
import http from 'http';
const server = http.createServer(app);
import { Server } from "socket.io";
const io = new Server(server);
import path from 'path';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import cors from 'cors';


app.get('/', (req, res, next) => {
  try {
    res.sendFile(path.join(__dirname, 'index.html'));
  } catch (error) {
    next(error);
  }
});

io.on('connection', (socket) => {
  console.log('server connected')
  socket.on('chat message', (msg) => {
    console.log('in the on(chat message) ready to emit')
    io.emit('chat message', msg);
  });
});

server.listen(process.env.PORT, () => console.log('Listening on PORT ', process.env.PORT));