import React from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <ToastContainer 
     position="bottom-right"
     autoClose={2000}
     newestOnTop={false}
     closeOnClick
     rtl={false}
     pauseOnHover
     />
  </React.StrictMode>,
);
