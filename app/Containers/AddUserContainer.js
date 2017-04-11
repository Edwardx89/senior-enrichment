// import react from 'react';
// import UserComponent from '../components/UserComponent';
// import { connect } from 'react-redux';

// const mapStateToProps = (state) => {
//   console.log('add user container', state)
//   return {
//     firstName: '',
//     lastName: '',
//     email: '',
//   };
// };

// const mapDispatchToProps = function (dispatch) {
//   return {

//   };
// };

// class AllStudentContainer extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       firstName: '',
//       lastName: '',
//       email: '',
//     }
//     this.handleFirstName = this.handleFirstName.bind(this)
//     this.handleEmail = this.handleEmail.bind(this)
//     this.handleLastName = this.handleLastName.bind(this)
//     this.handleSubmit = this.handleSubmit.bind(this)
//   }

//   handleFirstName(event) {
//     this.setState({
//       firstName: event.target.value
//     });
//   }

//   handleLastName(event) {
//     this.setState({
//       lastName: event.target.value
//     });
//   }

//   handleEmail(event) {
//     this.setState({
//       email: event.target.value
//     });
//   }

//   handleSubmit(event) {
//     console.log('handleSUbmit', event)
//     this.setState({
//     });
//   }

//   render() {
//     return (
//       <UserComponent
//         {...this.props}
//         handleEmail
//         handleFirstName
//         handleLastName
//         handleSubmit
//       />
//     )
//   }
// }

// const AddUserContainer = connect(mapStateToProps, mapDispatchToProps)(AllStudentContainer);

// export default AddUserContainer;
