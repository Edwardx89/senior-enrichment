import React, { Component } from 'react';
import axios from 'axios';
import initialState from '../reducers/index';
import Campus from './AddCampus';
import Student from './UserComponent';
import {Link} from 'react-router';

export default function Main(props) {
  console.log('Main.js', props)
  return (
    <div className="homePage">
      <h2>Senior Enrichment</h2>
      <div className="col-xs-2">
        <div>
          <ul>
            <li><Link to={'/students'}>All Students</Link></li>
            <li> <Link to={'/campus/add'}>All Campuses</Link> </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

