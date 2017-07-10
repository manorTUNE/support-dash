import React, { Component } from 'react';
// importing material-ui components
import Toggle from 'material-ui/Toggle';
import {GridList, GridTile} from 'material-ui/GridList';
import Divider from 'material-ui/Divider';




class UserStateList extends Component {

  states = ["New Tickets", "TLV Open", "US Open", "Chat", "Callbacks", "Break", "Sick Day", "PTO"];

  componentWillMount() {
  }

  render() {

    const statesToggle = {
      margin: 10
    }

    let setToggleStates = this.states.map(state => {
      return <GridTile
                cols={1}
                style={statesToggle}
                key={state}>
                <Toggle value={state} label={state}/>
              </GridTile>
    })

    return (
      <div>
        <GridList cols={2} cellHeight={'auto'} >
          {setToggleStates}
        </GridList>
      </div>
    );
  }
}

export default UserStateList;
