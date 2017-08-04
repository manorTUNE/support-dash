import React, { Component } from 'react';
import UserStateList from './userStateList';

// importing material-ui components
import {Card, CardHeader, CardText} from 'material-ui/Card';
import './user-panel.css';

class UserPanel extends Component {

  constructor() {
    super();
    this.state = {
    }
  }

  render() {

    const statesContainer = {
      width: "auto",
      height: "auto",
      margin: 5
    }  

    return (

        <Card style={statesContainer}>
          <CardHeader
            title={"PROFILE"}
            subtitle={this.props.user.email}
            avatar="./me.jpg" />
          <CardText>
            <UserStateList agents={this.props.agents} user={this.props.user}/>
          </CardText>
        </Card>
    );
  }
}

export default UserPanel;
