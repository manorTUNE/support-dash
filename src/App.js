import React, { Component } from 'react';


// Material-UI imports
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {GridList, GridTile} from 'material-ui/GridList';
import AppBar from 'material-ui/AppBar';

import UserPanel from './components/user-panel/user-panel';
import TeamPanel from './components/team-panel/team-panel';
import Tasks from './components/tasks/tasks';
import Callbacks from './components/callbacks/callbacks';
import Chats from './components/chats/chats';
import './App.css';
injectTapEventPlugin();

class App extends Component {


  // componentDidMount() {
  //   const rootRef = firebase.database().ref().child('react');
  //   const speedRef = rootRef.child('speed');
  //   speedRef.on('value', snap => {
  //     this.setState({
  //       speed: snap.val()
  //     })
  //   })
  // }

  render() {

    const appBar = {
      textAlign: "center"
    }

    return (
      <MuiThemeProvider>
        <div className="App">

          <AppBar
            title="HASOFFERS SUPPORT DASH"
            showMenuIconButton={false}
            style={appBar}
          />

              <div className="container">
                <GridList
                  cellHeight={'auto'}
                  cols={7}
                  padding={10}>

                  <GridTile cols={2}>
                    <UserPanel />
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
  }
}

export default App;
