import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppProvider } from './context';
import { AuthProvider } from 'react-auth-kit';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Router>
  <ToastContainer position='top-center'/>
  <AuthProvider authType={"cookie"} authName={"_auth"} cookieSecure={false}>
          <AppProvider>
          <App />
          </AppProvider>
      </AuthProvider>
  </Router>
     
 
  </React.StrictMode>
);


