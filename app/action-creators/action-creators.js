import axios from 'axios';
export const RECEIVE_STUDENTS = 'RECEIVE_STUDENTS';
export const RECEIVE_CAMPUSES = 'RECEIVE_CAMPUSES';
export const ADD_STUDENT = 'ADD_STUDENT';
export const ADD_CAMPUS = 'ADD_CAMPUS';
export const SELECTED_STUDENT = 'SELECTED_STUDENT';
export const SELECTED_CAMPUS = 'SELECTED_CAMPUS';

export const receiveUsers = (students) => {
  // console.log('action', students)
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

export const addCampus = (campus) => {
  console.log('action campus', campus)
  return {
    type: ADD_CAMPUS,
    campus: campus,
  };
};

export const selectedCampus = (campus) => {
  return {
    type: SELECTED_CAMPUS,
    selectedCampus: campus,
  };
};

export const selectedStudent = (student) => {
  return {
    type: SELECTED_STUDENT,
    selectedStudent: student,
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
    console.log('getting campuses')
    return (dispatch) => {
      axios.get('/api/campuses')
        .then((response) => {
          return response.data;
        })
        .then((allCampuses) => {
          dispatch(receiveCampuses(allCampuses));
        })
        .catch(err => { console.log(err)});
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
        .catch(err => { console.log(err)});
    };
  }

    export const submitCampus = (name) => {
    console.log('posting', name)
    return (dispatch) => {
      axios.post('/api/campus/add', name)
        .then((res) => {
          console.log('this data from posting', res)
          return res.data;
        })
        .then((newCampus) => {
          dispatch(addCampus(newCampus));
        })
         .catch(err => { console.log(err)});
    };
  }

  export const getStudent = (id) => {
    return (dispatch) => {
      axios.get(`/api/student/${id}`)
      .then((res) =>  res.data)
      .then((student) => {
        dispatch(selectedStudent(student));
      })
      .catch(err => {console.log(err)});
    };
  }

 export const getCampus = (id) => {
    return (dispatch) => {
      axios.get(`/api/campus/${id}`)
      .then((res) =>  res.data)
      .then((campus) => {
        dispatch(selectedCampus(campus));
      })
      .catch(err => {console.log(err)});
    };
  }

// export const deleteStudent = (id) => {
//   return (dispatch) => {
//     axios.get('api/student/${id}')
//     .then((res) => res.data)
//     .then((student) => {
//       dispatch()
//     })
//   }
// }
