import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx'; // 確保這裡加上 .tsx
import './index.css';

/**
 * PACKAGE INSTALLATION INSTRUCTIONS (此區塊註解不會影響程式碼，可以保留)
 */

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
