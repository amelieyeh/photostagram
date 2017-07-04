import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, BrowserHistory } from 'react-router';

import css from './styles/style.styl';

// import components
import Main from './components/Main';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';

const router = (
  <Router history={browserHistory}>
    <Router path="/" component={Main}>
      <IndexRouter component={PhotoGrid}></IndexRouter>
      <Router path="view/:postId" component={Single}></Router>
    </Router>
  </Router>
)

render(router, document.getElementById('root'));
