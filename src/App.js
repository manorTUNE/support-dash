import React, { Component } from 'react';
import * as firebase from 'firebase';
// Material-UI imports
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {GridList, GridTile} from 'material-ui/GridList';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

import UserPanel from './components/user-panel/user-panel';
import TeamPanel from './components/team-panel/team-panel';
import Tasks from './components/tasks/tasks';
import Callbacks from './components/callbacks/callbacks';
import Chats from './components/chats/chats';
import LoginPage from './components/login/login-page';
import './App.css';
injectTapEventPlugin();

class App extends Component {

  constructor() {
    super();
    this.state = {
      loggedIn: null,
      email: null,
      userName: null
    }
  }

  logUserIn(email) {
    this.setState({
      loggedIn: true,
      email: email,
      userName: email.slice(0, email.search('@'))
    })
  }

  logUserOut() {
    firebase.auth().signOut();
    this.setState({
      loggedIn: false
    })
  }


  render() {

    const appBar = {
      textAlign: "center"
    }
    if(this.state.loggedIn) {
      return (
        <MuiThemeProvider>
          <div className="App">

            <AppBar
              title="HASOFFERS SUPPORT DASH"
              showMenuIconButton={false}
              style={appBar}
              iconElementRight={<FlatButton label="Log Out" onClick={this.logUserOut.bind(this)} />}
            />
                
              <div className="container">
                <GridList
                  cellHeight={'auto'}
                  cols={7}
                  padding={10}>

                  <GridTile cols={2}>
                    <UserPanel email={this.state.email} userName={this.state.userName} />
                    <Callbacks />
                  </GridTile>
                  <GridTile cols={3} rows={1}>
                    <Tasks />
                  </GridTile>
                  <GridTile cols={2} rows={2}>
                    <Chats />
                    <TeamPanel />
                  </GridTile>
                </GridList>
              </div>
                
          </div>
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
  }
}

export default App;
