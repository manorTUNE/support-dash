import React, { Component } from 'react';
import Callbacks from '../callbacks/callbacks';
import UserStateList from './userStateList';
// importing material-ui components
import {Card, CardHeader, CardText} from 'material-ui/Card';
import {GridList, GridTile} from 'material-ui/GridList';
import './user-panel.css';

class UserPanel extends Component {

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
            avatar="me2.jpg" />
          <CardText>
            <UserStateList />
          </CardText>
        </Card>
    );
  }
}

export default UserPanel;
