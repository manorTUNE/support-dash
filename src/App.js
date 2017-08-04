import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import * as firebase from 'firebase';
// Material-UI imports
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {blueGrey700, blueGrey800, blue800} from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin';

import NavBar from './components/navBar/navBar';
import Home from './components/home/home';
import LoginPage from './components/login/login-page';
import AdminPanel from './components/adminPanel/adminPanel';
import MobileView from './mobile/mobileView';
import './App.css';
injectTapEventPlugin();

class App extends Component {

  constructor() {
    super();
    this.state = {
      // user's details
      isLoggedIn: null,
      email: null,
      userName: null,
      userId: null,
      // global style theme
      styles: {
        primary1: '#455A64',
        primary2: '#CFD8DC',
        primary3: '#90A4AE',
        cardTitleBg: blueGrey800,
        chip: '#90A4AE'
      },
      // list of agents. will be updated from Firebase upon Component Will Mount
      agents: []
    }
  }

  componentWillMount() {
    //findAllAgents and save as an array
    const agentsRef = firebase.database().ref().child('agents');
    let agents = []
    agentsRef.on('value', snap => {
      for(let agent in snap.val()) {
        agents.push(snap.val()[agent])
        //console.log(snap.val()[agent].name)
      }
      this.setState({
        agents: agents
      })
    })
  }

  // log user in upon sign in - gets update from the "Login" component
  logUserIn(email) {
    this.setState({
      isLoggedIn: true,
      email: email,
      userName: email.slice(0, email.search('@'))
    })
  }

  // change isLoggedIn state value to 'false' - gets update from the "NavBar" component
  logUserOut() {
    //firebase.auth().signOut();
    this.setState({
      isLoggedIn: false
    })
  }

  render() { 

    // set Material UI
    const muiTheme = getMuiTheme({
      palette: {
        primary1Color: blueGrey700,
        accent1Color: blue800
      }
    });
    // media query
    let mq = matchMedia( "(min-width: 600px)" )
    // media query => for desktop show this:
    if(mq.matches === true) {
      if(this.state.isLoggedIn) {
        return (
          <MuiThemeProvider muiTheme={muiTheme}>
            <Router>
              <div>
                <Route path='/' component={() => (<NavBar logUserOut={this.logUserOut.bind(this)} />)} />
                <Route exact path='/' component={() => (<Home agents={this.state.agents} styles={this.state.styles} user={{userName:this.state.userName, email:this.state.email}} />)} />
                <Route path='/admin' component={() => (<AdminPanel user={{userName:this.state.userName, email:this.state.email}} agents={this.state.agents}/>)} />
              </div>                 
            </Router>
          </MuiThemeProvider>
        );
      } else {
        return (
          <MuiThemeProvider>
            <div className="App">
              <LoginPage logUserIn={this.logUserIn.bind(this)}/>
            </div>
          </MuiThemeProvider>
        )
      }
    // media query => for smaller screens show this:
    } else if (mq.matches === false){
        if(this.state.isLoggedIn) {
          return (
            <MuiThemeProvider muiTheme={muiTheme}>
              <MobileView mq={mq}/>
            </MuiThemeProvider>
          )
        } else {
          return (
            <MuiThemeProvider muiTheme={muiTheme}>
              <div className="App">
                <LoginPage logUserIn={this.logUserIn.bind(this)}/>
              </div>
            </MuiThemeProvider>
          )
      }
    }
  }
}

export default App;
