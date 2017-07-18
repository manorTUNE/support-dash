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
      userName: ''
    }
  }

  userStates = ["New Tickets", "TLV Open", "US Open", "Chat", "Callbacks", "Break", "Sick Day", "PTO"];
  
  componentWillMount() {
    console.log('component will mount');
  }
  componentDidMount() {
    console.log('component did mount');
  }
  shouldComponentUpdate() {
    this.setState({
      userName: this.props.userName
    })
    return true;
  }
  componentWillUpdate() {
    console.log('component did mount');
  }
  componentWillReceiveProps() {
    console.log('component will receive props');
  }

  updateUserState() {
    const userStateRef = firebase.database().ref().child('agents').child(this.props.userName);
    console.log('update user state was called')
    //userStateRef.push({state: 'test'})
  }

  render() {

    const statesToggle = {
      margin: 5
    }
    const toggleLabel = {
      paddingLeft: 30
    }

    let setToggleStates = this.userStates.map(state => {
      return  <GridTile
                cols={1}
                style={statesToggle}
                key={state}>
                <Toggle 
                  labelStyle={toggleLabel} 
                  value={state} 
                  label={state}
                />
              </GridTile>
    })

    return (
        <GridList cols={1} cellHeight={'auto'} >
        <button onClick={this.updateUserState.bind(this)}>Test me</button>
          {setToggleStates}
        </GridList>
    );
  }
}

export default UserStateList;
