import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {GridList, GridTile} from 'material-ui/GridList';

class Callback extends Component {
  render() {

    const callbackCard = {
      height: 'auto',
      width: 'auto',
      margin: 10
    }

    return (
      <GridTile cols={1}>
      <Card style={callbackCard}>
        <CardHeader title="July 20" subtitle="John" />
        <CardText><a href="#">go to ticket</a></CardText>
      </Card>
      </GridTile>
    );
  }
}

export default Callback;
