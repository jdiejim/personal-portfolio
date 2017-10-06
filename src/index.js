import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const router = (
  <Router>
    <Route path="/" component={App} />
  </Router>
)

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
