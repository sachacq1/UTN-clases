import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { UserProvider } from './context/UserContext.jsx';
import Home from './views/home/Home.jsx';
import './index.css';
import { ContadorProvider } from './context/ContadorContext.jsx';
import Contacto from './views/home/contacto/Contacto.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContadorProvider>
      <UserProvider>
        <Home />
        <Contacto />
      </UserProvider>
    </ContadorProvider>
  </React.StrictMode>,
)
