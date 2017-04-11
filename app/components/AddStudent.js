'use strict';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {submitStudent, getStudents} from '../action-creators/action-creators';

export class AddStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: '',
      email: '',

    }
    this.handleName = this.handleName.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleName(event) {
    this.setState({
      Name: event.target.value
    });
  }


  handleEmail(event) {
    this.setState({
      email: event.target.value
    });
  }

  handleSubmit(event) {
    // console.log(this.props)
    event.preventDefault();
    // console.log('state in handle submit', this.state)
    this.props.onSubmit(this.state)
  }

  render() {
    console.log("I am in the AddStudent", this.props)
    return (
      <div>
        <h2> Add a Student </h2>
        <div className="student">
          <form className="student-form" onSubmit={this.handleSubmit}>
            First Name:
          <input type="text" name="firstName" onChange={this.handleName} /> <br />
            Email:
          <input name="Email" onChange={this.handleEmail}/> <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    )
  }
}


/*-------------------------Container----------------------*/
const mapStateToProps = (state) => {
  console.log('add user container', state)
  return {

  };
};

//the onSubmit will go to the this.props in the AddStudent class component.
const mapDispatchToProps = function (dispatch) {
  return {
    onSubmit: function(student) {
      dispatch(submitStudent(student))
    }
  };
};

const AddStudentContainer = connect(mapStateToProps, mapDispatchToProps)(AddStudent);

export default AddStudentContainer;
