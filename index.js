import React from 'react';
import { Router, browserHistory, hashHistory } from 'react-router';
import { render } from 'react-dom';
import routes from './app/routes.js';

render(
  <Router history={browserHistory} routes={routes}/>
  , document.getElementById('main'));
