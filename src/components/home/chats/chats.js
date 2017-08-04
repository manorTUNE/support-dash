import React, { Component } from 'react';
import './chats.css';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class Chats extends Component {
  render() {

    const cardContainer = {
      //backgroundColor: this.props.styles.primary3,
      width: "auto",
      height: "auto",
      margin: 5
    }

    return (
      <Card style={cardContainer}>
        <CardHeader title="CHAT SCHEDULE" className="cardHeader"/>
        <CardText>
          <Table selectable={false}>
            <TableHeader adjustForCheckbox={false} displaySelectAll={false} enableSelectAll={false}>
              <TableRow selectable={false}>
                <TableHeaderColumn>Start</TableHeaderColumn>
                <TableHeaderColumn>End</TableHeaderColumn>
                <TableHeaderColumn>Name</TableHeaderColumn>
                <TableHeaderColumn>Backup</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              <TableRow>
                <TableRowColumn>09:00</TableRowColumn>
                <TableRowColumn>11:00</TableRowColumn>
                <TableRowColumn>Manor</TableRowColumn>
                <TableRowColumn>Arun</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>11:00</TableRowColumn>
                <TableRowColumn>13:00</TableRowColumn>
                <TableRowColumn>Arun</TableRowColumn>
                <TableRowColumn>Evelyn</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>13:00</TableRowColumn>
                <TableRowColumn>15:00</TableRowColumn>
                <TableRowColumn>Evelyn</TableRowColumn>
                <TableRowColumn>Esther</TableRowColumn>
              </TableRow>
            </TableBody>
          </Table>    
        </CardText>
      </Card>
    );
  }
}

export default Chats;
