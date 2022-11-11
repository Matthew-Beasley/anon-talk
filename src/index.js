import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from "./App";
import Chat from "./Chat";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Chat.css';

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/chat' element={<Chat />} />
    </Routes>
  </BrowserRouter>
);