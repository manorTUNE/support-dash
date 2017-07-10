import React, { Component } from 'react';
import './tasks.css';
// import material-ui components
import {Card, CardHeader, CardText} from 'material-ui/Card';
import AppBar from 'material-ui/AppBar';
import {GridList, GridTile} from 'material-ui/GridList';
import Chip from 'material-ui/Chip';




class Tasks extends Component {

  tasksList = ["NEW TICKETS", "ASSIGNED TICKETS", "TLV OPEN", "US OPEN", "ASSIGNED TICKETS"];

  render() {

    const appBar = {
      marginTop: 5,
      height: 40,
      lineHeight: 40
    }
    const appBarTitle = {
      fontSize: 14
    }
    const cardContainer = {
      width: "auto",
      height: "auto",
      margin: 5,
      padding: 20
    }

    const card = {
      height: '35vh',
      width: '95%',
      margin: 5,
    }

    const chipContainer = {
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap"
    }
    const chip = {
      fontSize: "10px",
      marginRight: 3,
      marginTop: 5,
      textAlign: "center"
    }



    let taskItem = this.tasksList.map( task => {
      return <GridTile key={task} cols={1}>
              <Card style={card}>
                <CardHeader title={task}/>
                <CardText style={chipContainer}>
                  <Chip style={chip}>
                    Agent 1
                  </Chip>
                  <Chip style={chip}>
                    Agent 2
                  </Chip>
                  <Chip style={chip}>
                    Agent 2
                  </Chip>
                </CardText>
              </Card>
            </GridTile>
    })

    return (
      <div>
      <AppBar title="TASKS" showMenuIconButton={false} style={appBar} titleStyle={appBarTitle} />
      <Card style={cardContainer}>
        <GridList cols={2} cellHeight={'auto'}>
          {taskItem}
        </GridList>
      </Card>
      </div>
    );
  }
}

export default Tasks;
