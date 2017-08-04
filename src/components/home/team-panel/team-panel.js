import React, { Component } from 'react';
import './team-panel.css';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import {GridList} from 'material-ui/GridList';


class TeamPanel extends Component {

  constructor() {
    super();
    this.state = {
      teamNames: [],
      team: []
    }
  }

  render() {


    const container = {
      //backgroundColor: this.props.styles.primary3,
      //height: '100vh'
    }
    
    return (
      <Card style={container}>
        <CardHeader title={"TEAM"} />
        <CardText>
          <GridList
            cols={2}
            cellHeight={'auto'}
          >
          </GridList>
        </CardText>
      </Card>
    );
  }
}

export default TeamPanel;
