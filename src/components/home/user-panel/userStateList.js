import React, { Component } from 'react';
// import firebase 
import * as firebase from 'firebase';
// import material-ui components
import Toggle from 'material-ui/Toggle';
import {GridList, GridTile} from 'material-ui/GridList';




class UserStateList extends Component {

  constructor() {
    super();
    this.state = {
      
    }   
  }



  handleToggleChange = (i, event, isInputChecked) => {
    firebase.database().ref().child('agents').child(this.props.user.userName).child('state/' + i).child('state').set(isInputChecked);
    const stateRef = firebase.database().ref().child('agents').child(this.props.user.userName).child('state/' + i).child('state');
    stateRef.on('value', snap => {
      console.log(snap.val());
    })
  }


  render() {

    let states = [];
    let userRef = firebase.database().ref().child('agents/' + this.props.user.userName);
    userRef.on('value', snap => {
      for(let i in snap.val().state) {
        let state = snap.val().state[i]
        states.push(<Toggle 
                      key={i}
                      ref={i}
                      label={state.name} 
                      defaultToggled={state.state} 
                      onToggle={this.handleToggleChange.bind(this, i)}
                      />)
      }
    })

    return (
        <div>
          {states}
        </div>
    );
  }
}

export default UserStateList;
