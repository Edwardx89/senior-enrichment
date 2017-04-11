'use strict';
import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRedirect, IndexRoute } from 'react-router';
import {getStudents, getCampuses, getStudent, getCampus} from './action-creators/action-creators';

import store from './store';
import Root from './components/Root';
import Main from './components/Main';
import AddStudent from './components/AddStudent';
import AddCampus from './components/AddCampus';
import AllStudents from './components/AllUsers';
import AllCampuses from './components/AllCampuses';
import selectStudent from './components/SelectedStudent';
import selectCampus from './components/SelectedCampus';

//running getUsers() from action-creators onEnter to the /users directory.
const onloadUsers = () => {
  store.dispatch(getStudents())
};

const onloadCampuses = () => {
  store.dispatch(getCampuses())
};

const loadStudent = (routes) => {
  const id = routes.params.id
  store.dispatch(getStudent(id))
};

const loadCampus = (routes) => {
  const id = routes.params.id
  store.dispatch(getCampus(id))
};

render(
  <Provider store={store}>
   <Router history={hashHistory}>
    <Route path='/'>
      <IndexRoute component={Main} />
      <Route path="/students" component={AllStudents} onEnter={onloadUsers}/>
      <Route path='/student/add' component={AddStudent} onEnter={onloadCampuses}/>
      <Route path='/student/:id' component={selectStudent} onEnter={loadStudent}/>
      <Route path='/campuses' component={AllCampuses} onEnter={onloadCampuses}/>
      <Route path='/campus/add' component={AddCampus} />
      <Route path='/campus/:id' component={selectCampus} onEnter={loadCampus}/>
    </Route>
   </Router>
  </Provider>,
  document.getElementById('main')
);
