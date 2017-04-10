import axios from 'axios';
export const RECEIVE_STUDENTS = 'RECEIVE_STUDENTS';
export const RECEIVE_CAMPUSES = 'RECEIVE_CAMPUSES';

export const receiveUsers = (students) => {
  console.log('action', students)
  return {
    type: RECEIVE_STUDENTS,
    allStudents: students
  };
};

export const receiveCampuses = (campuses) => {
  return {
    type: RECEIVE_CAMPUSES,
    allCampuses: campuses
  };
};

export const getStudents = () => {
  return (dispatch) => {
    axios.get('/students')
    .then((response) => {
      return response.data;
    })
    .then((allStudents) => {
      dispatch(receiveUsers(allStudents));
    })
    .catch(err => {console.log(err)});
  };
}

export const getCampuses = () => {
  return (dispatch) => {
    axios.get('/campuses')
    .then((response) => {
      return response.data;
    })
    .then((allCampuses) => {
      dispatch(receiveCampuses(allCampuses));
    })
    .catch(err => {console.log(err)});
  };
}
