import { combineReducers } from 'redux'

const initialState = {
  allUsers: [],
  allCampuses: [],
  selectedUser: {},
  selectedCampus: {},
}

const rootReducer = function(state = initialState, action) {
  switch(action.type) {
    default: return state
  }
};

export default rootReducer
