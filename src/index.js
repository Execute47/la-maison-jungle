import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';

// Shim de process pour les dépendances qui en ont besoin
window.process = {
  env: {
    NODE_ENV: 'development',
  },
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
