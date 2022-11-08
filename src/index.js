import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from "./App";
import Chat from "./Chat";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/chat' element={<Chat />} />
      <Route path='/' element={<App />} />
    </Routes>
  </BrowserRouter>
);
