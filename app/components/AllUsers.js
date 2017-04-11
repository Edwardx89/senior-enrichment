'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import {getStudents, getCampuses} from '../action-creators/action-creators';

export function allStudents(props) {
  console.log('this is props.allstudents', props.allStudents.allStudents)
  //  let eachStudent = props.allStudents.allstudents.map((student) => {
  //     return `<li>${student}</li>`;
  //   });

  // console.log('props in AllUsers', props)
  return (
    <div>
     <div className="Homepage">
        <Link to={'/'}>BACK TO HOMEPAGE</Link>
      </div>
      <div className="add-student">
        <Link to={'/student/add'}>ADD NEW STUDENT</Link>
      </div>
      <h2> ALL STUDENTS </h2>
      <div className="all-students">
      {props.allStudents.allStudents.map((student) => {
        return <li key={student.id}><Link to={`/student/${student.id}`}>{student.Name}</Link></li>
      })}
      </div>
    </div>
  )
  // return(
  //   <div>
  //   </div>
  // )
}

/*------------------------Containers-----------------------*/

const mapStateToProps = (state) => {
  // console.log('this is alluserscontainer', state)
  return state
};

const mapDispatchToProps = function (dispatch) {
  return {

  };
};

const AllStudentsContainer = connect(mapStateToProps, mapDispatchToProps)(allStudents);
export default AllStudentsContainer;
