import React, { Component } from 'react';
import './team-panel.css';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import {GridList, GridTile} from 'material-ui/GridList';
import AppBar from 'material-ui/AppBar';

class TeamPanel extends Component {

  agents = ["Manor", "Alon", "Evelyn", "Doron", "Uriel", "Esther", "Arun"];
  states = ["Assigned Tickets", "New Tickets", "TLV Tickets", "US Tickets", "Chat", "Callback", "Break", "Sick Day", "PTO"];


  render() {

    const cardContainer = {
      width: "auto",
      height: "auto",
      margin: 5,
      padding: 5
    }
    const card ={
      height: 'auto',
      width: 'auto',
      margin: 5
    }
    const CardTitle = {
      paddingTop: 8,
      paddingBottom: 0
    }
    const cardText = {
      paddingTop: 5,
      paddingBottom: 5
    }

    let agent = this.agents.map(agent => {
      return    <GridTile key={agent} cols={1}>
                  <Card style={card}>
                    <CardHeader title={agent} style={CardTitle} />
                    <CardText style={cardText}>{this.states[Math.floor(Math.random() * this.states.length)]}</CardText>
                  </Card>
                </GridTile>
    })

    return (

      <Card style={cardContainer}>
        <AppBar title="TEAM STATE" showMenuIconButton={false} />
        <GridList
          cols={2}
          cellHeight={'auto'}
        >
          {agent}
        </GridList>
      </Card>
    );
  }
}

export default TeamPanel;
