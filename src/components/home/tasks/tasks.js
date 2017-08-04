import React, { Component } from 'react';
import * as firebase from 'firebase';
import './tasks.css';
// import material-ui components
import {Card, CardHeader, CardText} from 'material-ui/Card';
import AppBar from 'material-ui/AppBar';
import {GridList, GridTile} from 'material-ui/GridList';
import Chip from 'material-ui/Chip';




class Tasks extends Component {

  constructor() {
    super();
    this.state = {
      tasks: []
    }
  }

  componentWillMount() {
    // Create referrence to tasks node on Firebase
    const tasksRef = firebase.database().ref().child('tasks');
    tasksRef.on('value', snap => {
      let tempTasks = []
      for(let task in snap.val()) {
        tempTasks.push({key: task, val: snap.val()[task]})
      }
      this.setState({
        tasks: tempTasks
      })
    })
  }

  tasksList = ["NEW TICKETS", "ASSIGNED TICKETS", "TLV OPEN", "US OPEN"];

  render() {

    const container = {
      //backgroundColor: this.props.styles.primary3,
      width: "auto",
      height: "auto",
      margin: 5
    }
    const appBar = {
      height: 40    
    }
    const appBarTitle = {
      fontSize: 18,
      height: 'inherit',
      lineHeight: '40px'
    }
    const card = {
      //backgroundColor: this.props.styles.primary2,
      //height: '45vh',
      //width: '100%'
      margin: 5
    }
    const chipContainer = {
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap"
    }
    const agentChip = {
      marginTop: 5,
      textAlign: "center",
      width: '200px'
    }

    

    let taskItem = this.state.tasks.map(task => {
      return <GridTile key={task.key} cols={1}>
              <Card style={card}>
                <CardHeader title={task.val.name}/>
                <CardText style={chipContainer}>
                  {
                    task.val.assigned.map((agent) => {
                      return <Chip key={agent} style={agentChip} backgroundColor={this.props.styles.chip}>{agent}</Chip>
                    })
                  }
                </CardText>
              </Card>
            </GridTile>
    })
    
  
    

    return (
      <div style={container}>
        <AppBar title="TASKS" showMenuIconButton={false} style={appBar} titleStyle={appBarTitle} />
        <GridList cols={2} cellHeight={'auto'}>
          {taskItem}
        </GridList>
      </div>
    );
  }
}

export default Tasks;
