import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/**
 * PACKAGE INSTALLATION INSTRUCTIONS
 * 
 * To run this locally, initialize a Vite project and install these dependencies:
 * 
 * npm install react react-dom framer-motion lucide-react @vis.gl/react-google-maps firebase clsx tailwind-merge
 * npm install -D tailwindcss postcss autoprefixer
 * 
 * Environment Variables (.env):
 * VITE_GOOGLE_MAPS_KEY=your_api_key_here
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