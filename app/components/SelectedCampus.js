'use strict'
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getCampus } from '../action-creators/action-creators';
import {Link} from 'react-router';

export function selectCampus(props){
  console.log('selectCampus', props)
const selectedCampus = props.selectedCampus.selectedCampus;
  return (
    <div className="selectedCampus">
    <h3> CAMPUS INFO </h3><br />
    <div> CAMPUS: {selectedCampus.schoolName}</div>
    <div> <img src={selectedCampus.image} /> </div>
    <div>  </div>
    <div> <br />
    <div> <Link to={'/campuses'}>BACK TO ALL CAMPUS</Link> </div>
    </div>
    </div>
  )
}



/*------------------------Containers-----------------------*/

const mapStateToProps = (state) => {
  console.log('mapStatetoprops', state)
  return {
 selectedCampus: state.selectedCampus
}
};

const mapDispatchToProps = function (dispatch) {
  return {

  };
};

const SelectedCampusContainer = connect(mapStateToProps, mapDispatchToProps)(selectCampus);
export default SelectedCampusContainer;
