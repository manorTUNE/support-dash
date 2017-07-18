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
      margin: 5,
      paddingLeft: 0
    }

    return (
        <Card style={statesContainer}>
          <CardHeader
            title={"PROFILE"}
            subtitle={this.props.email}
            avatar="./me.jpg" />
          <CardText>
            <UserStateList userName={this.props.userName}/>
          </CardText>
        </Card>
    );
  }
}

export default UserPanel;
