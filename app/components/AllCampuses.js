'use strict'
import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { getStudents, getCampuses } from '../action-creators/action-creators';

export function allCampuses(props) {
  console.log('allcampuses', props)
  return (
    <div>
      <div className="Homepage">
        <Link to={'/'}>BACK TO HOME PAGE</Link>
      </div>
      <div className="add-campus">
        <Link to={'/campus/add'}>ADD NEW CAMPUS</Link>
      </div>
      <h2> ALL CAMPUSES </h2>
      <div className="all-campuses">
        {props.allCampuses.allCampuses.map((campus) => {
          return (
            <div>
              <li key={campus.id}><Link to={`/campus/${campus.id}`}>{campus.schoolName}</Link></li>
            </div>)
        })}
      </div>
    </div>
  )
}

/*------------------------Containers-----------------------*/

const mapStateToProps = (state) => {
  // console.log('this is alluserscontainer', state)
  return {
    allCampuses: state.allCampuses
  };
};

const mapDispatchToProps = function (dispatch) {
  return {

  };
};

const AllCampusesContainer = connect(mapStateToProps, mapDispatchToProps)(allCampuses);
export default AllCampusesContainer;
