import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// importing material-ui components
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import './navBar.css';


class NavBar extends Component {

  constructor() {
    super();
    this.state = {
    }
  }

  render() {

    const titleStyle = {
      textAlign: 'center'
    }

    return (
      <div>
        <AppBar
          titleStyle={titleStyle}
          title="HASOFFERS SUPPORT DASH"
          showMenuIconButton={false}
          iconElementRight={
            <div>
              <IconMenu
                iconButtonElement={
                  <IconButton><MoreVertIcon /></IconButton>
                }
              >
                <Link to={'/admin'} className={'link'}><MenuItem primaryText="Admin" onClick={this.props.logUserOut} /></Link>
                <Link to={'/'} className={'link'}><MenuItem primaryText="Home" /></Link>
                <MenuItem primaryText="Sign out" onClick={this.props.logUserOut} />
              </IconMenu>
            </div>
          }
        />
      </div>
    );
  }
}

export default NavBar;