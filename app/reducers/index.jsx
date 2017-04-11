import { combineReducers } from 'redux';
import {RECEIVE_STUDENTS, RECEIVE_CAMPUSES, ADD_STUDENT, ADD_CAMPUS, SELECTED_CAMPUS, SELECTED_STUDENT} from '../action-creators/action-creators';

const initialState = {
  allStudents: [],
  allCampuses: [],
  selectedStudent: {},
  selectedCampus: {},
}

const allStudents = function(state = initialState, action) {
  let newState = Object.assign({}, state)
  // console.log('before', newState);
  switch(action.type) {
    case RECEIVE_STUDENTS:
      newState.allStudents = action.allStudents;
      // console.log('after', newState);
      return newState
    default: return state
  }
};

const allCampuses = function(state = initialState, action) {
  let newState = Object.assign({}, state)
  switch(action.type) {
    case RECEIVE_CAMPUSES:
      newState.allCampuses = action.allCampuses;
      return newState
    default: return state
  }
};

const selectedStudent = function(state = initialState, action) {
  let newState = Object.assign({}, state)
  switch(action.type) {
    case SELECTED_STUDENT:
      newState.selectedStudent = action.selectedStudent;
      return newState
    default: return state
  }
};

const selectedCampus = function(state = initialState, action) {
  let newState = Object.assign({}, state)
  switch(action.type) {
    case SELECTED_CAMPUS:
      newState.selectedCampus = action.selectedCampus;
      return newState
    default: return state
  }
};

const rootReducer = combineReducers({
  allStudents: allStudents,
  allCampuses: allCampuses,
  selectedStudent: selectedStudent,
  selectedCampus: selectedCampus,

});

export default rootReducer;
