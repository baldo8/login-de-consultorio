import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import{Auth0Provider} from '@auth0/auth0-react'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-i3t1ke3a781d020n.us.auth0.com"
    clientId="KPLEjKvh8cDCJ3ECMSvPmBgsq60mhRZX"
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience:"this is a unique identifier",
      
    }} 
    scope='openid email profile'
    >
    <App />
    </Auth0Provider>
  </React.StrictMode> 
);


