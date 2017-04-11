'use strict'
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getStudent } from '../action-creators/action-creators';
import {Link} from 'react-router';
import axios from 'axios';

export function selectStudent(props){

  console.log('selectedStudent', props)
  const selectedStudent = props.selectedStudent.selectedStudent;

  return (
    <div className="selectedStudent">
    <h3> STUDENT INFO </h3><br />
    <div> Name: {selectedStudent.Name}</div>
    <div> Email: {selectedStudent.email}</div>
    <div> Campus: </div>
    <div> <br />
    <div> <Link to={'/students'}>BACK TO ALL STUDENTS</Link> </div>
    </div>
    </div>
  )
}



/*------------------------Containers-----------------------*/

const mapStateToProps = (state) => {
  console.log('mapStatetoprops', state)
  return {
 selectedStudent: state.selectedStudent
}
};

const mapDispatchToProps = function (dispatch) {
  return {
  };
};

const SelectedStudentContainer = connect(mapStateToProps, mapDispatchToProps)(selectStudent);
export default SelectedStudentContainer;
