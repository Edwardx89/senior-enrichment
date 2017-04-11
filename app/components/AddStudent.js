'use strict';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { submitStudent, getStudents } from '../action-creators/action-creators';
import { Link } from 'react-router';

export class AddStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: '',
      email: '',
      campusId: '',
      schoolName: '',

    }
    this.handleName = this.handleName.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleOption = this.handleOption.bind(this)

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

  handleOption(event) {
    event.preventDefault();
    this.setState({
      campusId: event.target.value,
      schoolName: event.target.name
    })
  }


  render() {
    console.log("I am in the AddStudent", this.props)
    const allCampuses = this.props.allCampuses.allCampuses;
    const campus = allCampuses.map((campus) => {
      console.log(campus.schoolName)
      return <option value={campus.id} name={campus.schoolName}>{campus.schoolName}</option>
    });
    return (
      <div>
        <div className="Homepage">
          <Link to={'/'}>BACK TO HOME PAGE</Link>
        </div>
        <h2> Add a Student </h2>
        <div className="student">
          <form className="student-form" onSubmit={this.handleSubmit}>
            First Name:
          <input type="text" name="firstName" onChange={this.handleName} /> <br />
            Email:
          <input name="Email" onChange={this.handleEmail} /> <br />
            <select value="this.state.value" onChange={this.handleOption}>
              <option value="Add-campus">Select a campus</option>
              {campus}
            </select> <br />
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
    allCampuses: state.allCampuses
  }
};

//the onSubmit will go to the this.props in the AddStudent class component.
const mapDispatchToProps = function (dispatch) {
  return {
    onSubmit: function (student) {
      dispatch(submitStudent(student))
    }
  };
};

const AddStudentContainer = connect(mapStateToProps, mapDispatchToProps)(AddStudent);

export default AddStudentContainer;
