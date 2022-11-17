import React, { useEffect, useState } from "react";
import axios from 'axios';

function App() {
  const [messageStream, setMessageStream] = useState([]);
  const [toSend, setToSend] = useState('');
  const user = 'jasper';

  const send = () => {
    axios.post('endpoints/message', { handle: 'matt', message: toSend })
    .then(() =>  axios.get('endpoints/message'))
    .then(response => setMessageStream(response.data))
    .then(() => setToSend(''));
  }

  const poll = async () => {
   axios.get('endpoints/message')
   .then(response => setMessageStream(response.data))
   console.log('polling')
  }

  useEffect (() => {
    setInterval(poll, 2000)
  },[]);

  return (
    <div className='chat-container'>
      <div className='recieve-message'>
        <ul className='message-list'>
          {
            messageStream && messageStream.map((item, idx) => {
              return (
                <li key={idx} className='message-li'><div style={{ fontWeight: 'bold' }}>{item.handle}</div><div>{item.message}</div></li>
              )
            })
          }
        </ul>
      </div>
      <input className='submit-message' type='text' value={toSend} onChange={e =>  setToSend(e.target.value)}></input>
      <button onClick={e => send()}>Emit Message</button>
    </div>
  )
}

export default App;