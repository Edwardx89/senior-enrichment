import react from 'react';
import UserComponent from '../components/UserComponent';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = function (dispatch) {
  return {

  };
};

const AddUserContainer = connect(mapStateToProps, mapDispatchToProps)(UserComponent);
export default AddUserContainer;
