import React, { Component } from 'react';
import './login-page.css';
import * as firebase from 'firebase';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';


class LoginPage extends Component {

  constructor() {
    super();
    this.state = {
      open: true
    }
    firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
      console.log('currently logged in as: ' + firebaseUser.email)
      this.logUserIn(firebaseUser.email)
    } else {
      console.log('not logged in')
    }
  })
  }

  componentWillMount() {}

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  login(e) {
    let email = this.refs.email.input.value;
    let password = this.refs.password.input.value;
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(e => {
      console.log(e.message)
    })
  };
  signUp(e) {
    let email = this.refs.email.input.value;
    let password = this.refs.password.input.value;
    if(email.length < 5 || password.length < 5) {
      alert('Email or password are invalid')
    }
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
      width: 500
    }
    const loginButton = {
      display: 'block'
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

          <RaisedButton label="Login" primary={true} style={loginButton}/>
    
        </Dialog>
      </div>
    );
  }
}

export default LoginPage;