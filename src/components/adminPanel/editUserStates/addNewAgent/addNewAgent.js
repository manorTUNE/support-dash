import React, { Component } from 'react';
// import Firebase
import * as firebase from 'firebase';
// importing material-ui components
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Card, CardHeader, CardText, CardActions} from 'material-ui/Card';

export default class AddNewAgent extends Component {

  addAgent() {
    console.log('clicked');
    let name = this.refs.agentName.input.value;
    // create new agent on firebase
    firebase.database().ref().child('agents').child(name).child('name').set(name);
    // add default states to new agent
    const statesRef = firebase.database().ref().child('states');
    statesRef.on('value', snap => {
      for(let state in snap.val()) {
        firebase.database().ref().child('agents').child(name).child('state').push(
          {name: snap.val()[state].name, state: false}
        )
      }
    });
   }

  render() {

    const textUnderLine = {
      width: 150
    }
    
    return (
        <Card>
          <CardHeader title={"ADD NEW AGENT"} />
          <CardText>
            <TextField
              underlineStyle={textUnderLine}
              id="agentName"  type="text" ref="agentName" hintText="Agent Name" floatingLabelText="Agent Name" /><br/>
          </CardText>
          <CardActions>
            <RaisedButton 
              label="ADD NEW AGENT"
              primary={true}
              disabled={false}
              onClick={this.addAgent.bind(this)}
              onClick={() => this.props.openSnack('AGENT ADDED')}
            />
          </CardActions>
        </Card>
    );
  }
}
