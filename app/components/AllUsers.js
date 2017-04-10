'use strict';
import React, {Component} from 'react';
import {Link} from 'react-router';

export default function allStudents (props) {
  console.log('props in AllUsers', props)
  return (
  <div>
    <h2> ALL STUDENTS </h2>
    <div className="all-students">
    </div>
    <div className="add-student">
      <li><Link to={'/student/add'}>Add Student</Link></li>
    </div>
   </div>
  )
}
