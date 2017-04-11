'use strict';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import {submitStudent, getStudents, submitCampus, getCampuses} from '../action-creators/action-creators';

export class AddCampus extends Component {
  constructor(props){
    super(props);
    this.state = {
      schoolName: '',
      image: '',
    }

    this.handleSchool = this.handleSchool.bind(this);
    this.handleUrl = this.handleUrl.bind(this);
    this.handleCampusSubmit = this.handleCampusSubmit.bind(this);
  }

  handleSchool(event) {
    this.setState({
      schoolName: event.target.value
    });
  }


  handleUrl(event) {
    this.setState({
      image: event.target.value
    });
  }

   handleCampusSubmit(event) {
    // console.log(this.props)
    event.preventDefault();
    // console.log('state in handle Campus submit', this.state)
    this.props.onSubmit(this.state)
  }

  render() {
  console.log("I am in the AddCampus")
  return (
  <div>
    <h2> Add a Campus </h2>
    <div className="campus">
      <form className="campus-form" onSubmit={this.handleCampusSubmit}>
        School Name:
          <input type="text" name="School Name" onChange={this.handleSchool}/> <br />
        Image Url:
          <input name="url" onChange={this.handleUrl}/> <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
   </div>
  )

  }
}


/*------------------Container---------------------*/
const mapStateToProps = (state) => {
  console.log('add Campus Container', state)
  return {

  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    onSubmit: function (campus) {
      dispatch(submitCampus(campus));
    }
  };
};

const AddCampusContainer = connect(mapStateToProps, mapDispatchToProps)(AddCampus);
export default AddCampusContainer;
