import React, { Component } from 'react';
// import Firebase
import * as firebase from 'firebase';
// importing material-ui components
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Card, CardHeader, CardText, CardActions} from 'material-ui/Card';

export default class AddNewState extends Component {

  addState(){
    let name = this.refs.stateName.input.value;
    console.log(name);
    firebase.database().ref().child('states').push({name: name});
    this.refs.stateName.input.value = null;
    this.setState({snackText: 'state added'})
  }

  render() {

    const textUnderLine = {
      width: 150
    }

    return (
      <Card>
          <CardHeader title={"Add New State"} />
          <CardText>
            <TextField 
              underlineStyle={textUnderLine} 
              type="text" ref="stateName" hintText="State Name" floatingLabelText="State Name" /><br/>
          </CardText>
          <CardActions>
            <RaisedButton 
              label="ADD NEW STATE"
              primary={true}
              disabled={false}
              onClick={this.addState.bind(this)}
            />
          </CardActions>
        </Card>
    );
  }
}