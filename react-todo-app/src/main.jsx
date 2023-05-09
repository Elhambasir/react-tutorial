import '@/styles/app.css';
import '@/styles/style.css';
import React from "react";
import ReactDOM from "react-dom/client";
import TodoApp from '@/components/TodoApp';
// import Navbar from "@/components/Navbar";
// import Modal from "@/components/Modal";
// import Form from "@/components/Form";
import { BrowserRouter } from 'react-router-dom';

const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer);
root.render(
   <React.StrictMode>
      <BrowserRouter>
         <TodoApp />
      </BrowserRouter>
   </React.StrictMode>
);
