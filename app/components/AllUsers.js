'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import {getStudents, getCampuses} from '../action-creators/action-creators';

export function allStudents(props) {
  let eachStudent;
  if(props.allStudents && props.allStudents.map()){
    eachStudent = props.allStudents.map((student) => {
      return `<li>${student}</li>`;
    });
  }

  console.log('props in AllUsers', props)
  return (
    <div>
      <div className="add-student">
        <li><Link to={'/student/add'}>Add New Student</Link></li>
      </div>
      <h2> ALL STUDENTS </h2>
      <div className="all-students">
      </div>
      ${eachStudent}
    </div>
  )
}

/*------------------------Containers-----------------------*/

const mapStateToProps = (state) => {
  // console.log('this is alluserscontainer', state)
  return {
    allStudents: state.allStudents
  };
};

const mapDispatchToProps = function (dispatch) {
  return {

  };
};

const AllStudentsContainer = connect(mapStateToProps, mapDispatchToProps)(allStudents);
export default AllStudentsContainer;
