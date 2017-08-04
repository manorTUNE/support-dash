import React, { Component } from 'react';
import * as firebase from 'firebase';
// importing material-ui components
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import {Card, CardHeader, CardText, CardActions} from 'material-ui/Card';

export default class RemoveAgent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // states for Remove Agent dropt down
      removeAgentDropDownValue: 0
    }
  }

  removeAgent() {
    console.log('hi there')
    console.log(this.refs.agentsDropDown)
  }

  handleRemoveAgentDropDownValue = (event, index, value) => this.setState({removeAgentDropDownValue: value});
  

  render() {

    const agents = [];
    this.props.agents.map((agent, i) => {
      agents.push(<MenuItem value={i+1} key={i+1} primaryText={agent.name} />);
    })
    const textUnderLine = {
      width: 150
    }
    
    return (
      <Card>
          <CardHeader title={"REMOVE AGENT"} />
          <CardText>
            <DropDownMenu ref="agentsDropDown" value={this.state.removeAgentDropDownValue} onChange={this.handleRemoveAgentDropDownValue}>
              <MenuItem value={0} key={0} primaryText={'select agent'} disabled={true} />
              {agents}
            </DropDownMenu>
          </CardText>
          <CardActions>
            <RaisedButton 
              label="REMOVE AGENT"
              primary={true}
              disabled={false}
              onClick={this.removeAgent.bind(this)} 
              onClick={this.props.openSnack.bind(this, 'Agent removed!')}
            />
          </CardActions>
        </Card>
    );
  }
}