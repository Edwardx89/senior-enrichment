'use strict';
import React, {Component} from 'react';

export default function UserComponent (props) {
  console.log("I am in the UserComponent", props)
  return (
  <div>
    <h2> Add a Student </h2>
    <div className="student">
      <form className="student-form" onSubmit>
        First Name:
          <input type="text" name="firstName"/> <br />
        Last Name:
          <input name="lastName" /> <br />
        Email:
          <input name="Email" /> <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
   </div>
  )
}
