import React, { Component } from 'react';
// import components
import UserPanel from './user-panel/user-panel';
import TeamPanel from './team-panel/team-panel';
import Tasks from './tasks/tasks';
import Callbacks from './callbacks/callbacks';
import Chats from './chats/chats';
// importing material-ui components
import {GridList, GridTile} from 'material-ui/GridList';

class Home extends Component {

  constructor() {
    super();
    this.state = {
      agents: []
    }
  }

  render() {

    return (
      <div className="App">
        <GridList
          cellHeight={'auto'}
          cols={5}
          padding={0}>

          <GridTile cols={1} rows={2}>
            <UserPanel agents={this.props.agents} user={this.props.user} styles={this.props.styles} />
            <Callbacks styles={this.props.styles} />
          </GridTile>
          <GridTile cols={3} rows={1}>
            <Tasks styles={this.props.styles} />
          </GridTile>
          <GridTile cols={1} rows={2}>
            <Chats styles={this.props.styles} />
            <TeamPanel agents={this.props.agents} styles={this.props.styles} />
          </GridTile>
        </GridList>                  
      </div>
    );
  }
}

export default Home;