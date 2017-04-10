import react from 'react';
import allStudents from '../components/AllUsers';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  console.log('this is alluserscontainer', state)
  return {
    allStudents: state
  };
};

const mapDispatchToProps = function (dispatch) {
  return {

  };
};

const AllStudentsContainer = connect(mapStateToProps, mapDispatchToProps)(allStudents);
export default AllStudentsContainer;
