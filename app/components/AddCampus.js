'use strict';
import React, {Component} from 'react';

export default function AddCampus (props) {
  console.log("I am in the AddCampus")
  return (
  <div>
    <h2> Add a Campus </h2>
    <div className="campus">
      <form className="campus-form">
        School Name:
          <input type="text" name="School Name" /> <br />
        Address:
          <input name="Address" /> <br />
        Url:
          <input name="url" /> <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
   </div>
  )
}
