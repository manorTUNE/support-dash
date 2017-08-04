import React, { Component } from 'react';
import './login-page.css';
import * as firebase from 'firebase';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';


class LoginPage extends Component {

  constructor() {
    super();
    this.state = {
      open: true
    }
    // Firebase function that listens to user login status changes
    firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
      console.log('currently logged in as: ' + firebaseUser.email)
      this.logUserIn(firebaseUser.email)
    } else {
      console.log('not logged in')
    }
  })
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  login() {
    // get email and password from login form
    let email = this.refs.email.input.value;
    let password = this.refs.password.input.value;
    // set Firebase and sign user in 
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(e => {
      console.log(e.message)
    })
    // if login is successful, then "onAuthStateChanged" will trigger (in the constructor)
  };
  signUp(e) {
    // get email and password from login form
    let email = this.refs.email.input.value;
    let password = this.refs.password.input.value;
    // set Firebase and create new user
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(email, password);
    promise
      .then(user => console.log(user))
      .catch(e => {
      console.log(e.message)      
    })
  };

  logUserIn(email) {
    this.props.logUserIn(email)
  }


  render() {

    const actions = [
      <FlatButton
        label="Login"
        primary={true}
        disabled={false}
        onClick={this.login.bind(this)}
      />,
      <FlatButton
        label="Sign Up"
        primary={false}
        disabled={false}
        onClick={this.signUp.bind(this)}
      />
    ];
    const loginDialog = {
    }

    const dialogTitleStyle = {
      textAlign: 'center',
      backgroundColor: ''
    }

    return (
      <div>
        <Dialog
          title="Log in to HasOffers Dash"
          actions={actions}
          modal={true}
          open={this.state.open}
          titleStyle={dialogTitleStyle}
          style={loginDialog}>

          <TextField type="email" ref="email" hintText="Email" floatingLabelText="Email" /><br />
          <TextField type="password" ref="password" hintText="Password" floatingLabelText="Password" />
              
        </Dialog>
      </div>
    );
  }
}

export default LoginPage;