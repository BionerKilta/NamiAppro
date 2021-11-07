import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import { LanguageProvider } from './context';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
