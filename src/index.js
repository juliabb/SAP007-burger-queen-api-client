import React from 'react';
import ReactDOM from 'react-dom/client';
import LoginPage from './Pages/LoginPage';

import './Pages/Style/global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoginPage />
  </React.StrictMode>
);
