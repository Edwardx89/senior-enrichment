'use strict';
import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRedirect, IndexRoute } from 'react-router';

import store from './store';
import Root from './components/Root';
import Main from './components/Main';
import User from './components/UserComponent';
import AddCampus from './components/AddCampus';


render(
  <Provider store={store}>
   <Router history={hashHistory}>
    <Route path='/'>
      <IndexRoute component={Main} />
      <Route path='/user/add' component={User} />
      <Route path='/campus/add' component={AddCampus} />
    </Route>
   </Router>
  </Provider>,
  document.getElementById('main')
);
