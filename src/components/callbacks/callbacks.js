import React, { Component } from 'react';
import Callback from './callback';
import './callbacks.css';
import {Card, CardHeader} from 'material-ui/Card';
import {GridList} from 'material-ui/GridList';

class Callbacks extends Component {
  render() {

    const cardContainer = {
      width: "auto",
      height: "auto",
      margin: 5,
    }

    return (
        <Card style={cardContainer}>
          <CardHeader title="UPCOMING CALLBACKS" />
          <GridList cols={2}>
            <Callback />
          </GridList>
        </Card>
    );
  }
}

export default Callbacks;
