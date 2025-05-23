import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { init } from '@neutralinojs/lib';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

init();

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);