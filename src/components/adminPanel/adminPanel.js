import React, { Component } from 'react';
import EditUserStates from './editUserStates/editUserStates';
// importing material-ui components
import {Tabs, Tab} from 'material-ui/Tabs';

class AdminPanel extends Component {

  constructor() {
    super();
    this.state = {
    }
  }

  componentWillMount() {
    
  }


  render() {

    return (
      <Tabs>
        <Tab label="USER STATES">
          <EditUserStates user={this.props.user} agents={this.props.agents} />
        </Tab>
        <Tab label="CHAT SCHEDULE">

        </Tab>
        <Tab label="CALLBACKS">

        </Tab>
        <Tab label="TEAM">

        </Tab>
        <Tab label="MESSAGES">

        </Tab>
      </Tabs>
    );
  }
}

export default AdminPanel;
