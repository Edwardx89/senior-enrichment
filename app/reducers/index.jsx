import { combineReducers } from 'redux';
import {RECEIVE_STUDENTS, RECEIVE_CAMPUSES} from '../action-creators/action-creators';

const initialState = {
  allStudents: [],
  allCampuses: [],
  selectedStudent: {},
  selectedCampus: {},
}

const allStudents = function(state = initialState, action) {
  let newState = Object.assign({}, state)
  switch(action.type) {
    case RECEIVE_STUDENTS:
      newState = action.allStudents;
      return newState
    default: return state
  }
};

const allCampuses = function(state = initialState, action) {
  let newState = Object.assign({}, state)
  switch(action.type) {
    case RECEIVE_CAMPUSES:
      newState = action.allCampuses;
      return newState
    default: return state
  }
};

const rootReducer = combineReducers({
  allStudents: allStudents,
  allCampuses: allCampuses,
});

export default rootReducer;
