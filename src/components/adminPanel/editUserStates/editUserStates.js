import React, { Component } from 'react';
import './editUserStates.css';
// components
import AddNewAgent from './addNewAgent/addNewAgent';
import RemoveAgent from './removeAgent/removeAgent';
import AddNewState from './addState/addState';
import RemoveState from './removeState/removeState';
// importing material-ui components

import Snackbar from 'material-ui/Snackbar';



class EditUserStates extends Component {

  constructor(){
    super();
    this.state = {
      value: 0,
      isSnackOpen: false,
      snackText: 'text'
    }

  }

  openSnack(text) {
    this.setState({
      snackText: text,
      isSnackOpen: true
    })
  }

  render() {

    const snackBar = {
      color: '#FF5722',
      textAlign: 'center'
    }

    return (
      <div>
        <div className="container">
          <AddNewAgent openSnack={this.openSnack.bind(this)} />
          <RemoveAgent openSnack={this.openSnack.bind(this)} agents={this.props.agents} />
          <AddNewState openSnack={this.openSnack.bind(this)} />
          <RemoveState openSnack={this.openSnack.bind(this)} />
        </div>

        <Snackbar
          contentStyle={snackBar}
          open={this.state.isSnackOpen}
          message={this.state.snackText}
          autoHideDuration={3000}
          onRequestClose={this.handleRequestClose}
        />

      </div>
    );
  }

}

export default EditUserStates;

