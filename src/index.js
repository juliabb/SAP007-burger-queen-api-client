import React from 'react';
import ReactDOM from 'react-dom/client';
import {Home} from './Pages/Home';

import './Pages/Style/global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
