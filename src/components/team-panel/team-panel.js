import React, { Component } from 'react';
import './team-panel.css';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import {GridList, GridTile} from 'material-ui/GridList';
import AppBar from 'material-ui/AppBar';
import * as firebase from 'firebase';


class TeamPanel extends Component {

  constructor() {
    super();
    this.state = {
      teamNames: [],
      team: []
    }
    let tempTeam;
    let tempTeam2 = []
    const teamRef = firebase.database().ref().child('agents');
    teamRef.on('value', snap => {
      tempTeam = snap.val()
      for(let name in tempTeam) {
        tempTeam2.push(name)
      }
      this.setState({
        team: tempTeam,
        teamNames: tempTeam2
      })    
    })
  }

  componentDidMount() {
  }

  states = ["Assigned Tickets", "New Tickets", "TLV Tickets", "US Tickets", "Chat", "Callback", "Break", "Sick Day", "PTO"];

  render() {

    const appBar = {
      marginTop: 5,
      height: 40
    }
    const appBarTitle = {
      fontSize: 18,
      height: 'inherit',
      lineHeight: '40px'
    }
    const cardContainer = {
      width: "auto",
      height: "auto",
      margin: 5,
      padding: 5
    }
    const card = {
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

    let agent = this.state.teamNames.map(x => {
      return    <GridTile key={x} cols={1}>
                  <Card style={card}>
                    <CardHeader title={this.state.team[x].name} style={CardTitle} />
                    <CardText style={cardText}>{this.state.team[x].state}</CardText>
                  </Card>
                </GridTile>
    })
    

    return (

      <Card style={cardContainer}>
        <AppBar title="TEAM STATE" showMenuIconButton={false} style={appBar} titleStyle={appBarTitle}/>
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
