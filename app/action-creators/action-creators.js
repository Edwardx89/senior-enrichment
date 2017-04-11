import axios from 'axios';
export const RECEIVE_STUDENTS = 'RECEIVE_STUDENTS';
export const RECEIVE_CAMPUSES = 'RECEIVE_CAMPUSES';
export const ADD_STUDENT = 'ADD_STUDENT';

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

export const addStudent = (student) => {
  return {
    type: ADD_STUDENT,
    student: student,
  };
};

export const getStudents = () => {
  return (dispatch) => {
      axios.get('/api/students')
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
      axios.get('/api/campuses')
        .then((response) => {
          return response.data;
        })
        .then((allCampuses) => {
          dispatch(receiveCampuses(allCampuses));
        })
        .catch(err => { console.log(err) });
    };
  }

  export const submitStudent = (name) => {
    console.log('posting', name)
    return (dispatch) => {
      axios.post('/api/student/add', name)
        .then((res) => {
          console.log('this data from posting', res)
          return res.data;
        })
        .then((newStudent) => {
          dispatch(addStudent(newStudent));
        })
        .catch(next);
    };
  }
