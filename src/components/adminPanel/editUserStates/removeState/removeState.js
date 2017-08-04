import React, { Component } from 'react';
// import Firebase
import * as firebase from 'firebase'; 
// importing material-ui components
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import {Card, CardHeader, CardText, CardActions} from 'material-ui/Card';

export default class RemoveState extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // states dropdown
      statesDropDownValue: 0
    }
  }
  

  handleRemoveState() {
    console.log(this.state.statesDropDownValue);
    firebase.database().ref().child('states/' + this.state.statesDropDownValue).remove();
  };

  handleStatesDropDownValue  = (event, index, value) => this.setState({statesDropDownValue: value});

  render() {

    const states = [];
    let statesRef = firebase.database().ref().child('states');
    statesRef.on('value', snap => {
      for(let state in snap.val()) {
        states.push(<MenuItem value={state} key={state} primaryText={snap.val()[state].name} />)
      }
    })   

    return (
      <div>
        <Card>
          <CardHeader title={"REMOVE STATE"} />
          <CardText>
            <DropDownMenu ref="statesDropDown" value={this.state.statesDropDownValue} onChange={this.handleStatesDropDownValue}>
              <MenuItem value={0} key={0} primaryText={'select state'} disabled={true} />
              {states}
            </DropDownMenu>
          </CardText>
          <CardActions>
            <RaisedButton 
              label="REMOVE STATE"
              primary={true}
              disabled={false}
              onClick={this.handleRemoveState.bind(this)}
              //onClick={this.props.openSnack.bind(this, 'state removed')} 
            />
          </CardActions>
        </Card>
      </div>
    );
  }
}