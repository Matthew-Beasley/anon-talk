import React, { useEffect, useState } from 'react';
import {io} from 'socket.io-client';


const Chat = () => {
  let socket;
  socket = io();
  const [recieved, setRecieved] = useState('');
  const [sent, setSent] = useState('');

  useEffect (() => {
    socket.on('connect', () => console.log('Connected to socket' + socket.id));
  }, []);

  socket.on('chat message', (msg) =>  setRecieved(`${recieved}${msg}`));

  const emitMessage = () => {
    socket.emit('chat message', `${sent}\n`)
  };

  return (
    <div className='chat-container'>
      <textarea className='recieve-message' name='recieve' readOnly={true} cols='50' rows='20' value={recieved}></textarea>
      <input className='submit-message' type='text' value={sent} onChange={(e => {setSent(e.target.value)})}></input>
      <button onClick={emitMessage}>Emit Message</button>
    </div>
  )
};

export default Chat;

