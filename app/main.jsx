'use strict';
import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRedirect, IndexRoute } from 'react-router';
import {getStudents, getCampuses} from './action-creators/action-creators';

import store from './store';
import Root from './components/Root';
import Main from './components/Main';
import Student from './components/UserComponent';
import AddCampus from './components/AddCampus';
import AllStudents from './components/AllUsers';

//running getUsers() from action-creators onEnter to the /users directory.
const onloadUsers = () => {
  store.dispatch(getStudents())
};


render(
  <Provider store={store}>
   <Router history={hashHistory}>
    <Route path='/'>
      <IndexRoute component={Main} />
      <Route path="/students" component={AllStudents} onEnter={onloadUsers}/>
      <Route path='/student/add' component={Student} />
      <Route path='/campus/add' component={AddCampus} />
    </Route>
   </Router>
  </Provider>,
  document.getElementById('main')
);
