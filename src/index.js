import './fonts/font1.ttf'
import './fonts/font2.ttf'
import './fonts/font3.ttf'
import './fonts/font4.ttf'
import './fonts/font5.ttf'
import './fonts/font6.ttf'
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App/App';

ReactDOM.render(
  <React.StrictMode>
    <Router><App /></Router>
  </React.StrictMode>,
  document.getElementById('root')
);

