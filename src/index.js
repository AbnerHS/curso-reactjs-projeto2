import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './templates/App';
import { Home } from './templates/useAsync';

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root'),
);
