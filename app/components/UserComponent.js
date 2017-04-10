'use strict';
import React, {Component} from 'react';

export default function UserComponent (props) {
  console.log("I am in the UserComponent")
  return (
  <div>
    <h2> Add a Student </h2>
    <div className="user">
      <form className="user-form">
        First Name:
          <input type="text" name="First Name" /> <br />
        Last Name:
          <input name="Last Name" /> <br />
        Email:
          <input name="Email" /> <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
   </div>
  )
}
