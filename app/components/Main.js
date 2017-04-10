import React, { Component } from 'react';
import axios from 'axios';
import initialState from '../reducers/index';
import User from './UserComponent';

export default function Main (props) {
  console.log('Main.js', props)
  return (
    <div className="homePage">
      This is Main.js
      <div className="col-xs-2">
      </div>
    </div>
  )
}

