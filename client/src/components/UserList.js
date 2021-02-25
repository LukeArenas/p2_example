import React, { Component } from 'react'
import { Container, Grid, GridColumn } from 'semantic-ui-react'
import UserCard from './UserCard'
export default class UserList extends Component {
  render() {
    const { users, selectUser, selectedUser, clear } = this.props
    return (
      <Container className="container-wrapper">
        <Grid stackable columns={1} divided="vertically">
          {users.map((user) => (
            <GridColumn>
              <UserCard
                key={user._id}
                user={user}
                selectUser={selectUser}
                selectedUser={selectedUser}
                clear={clear}
              />
            </GridColumn>
          ))}
        </Grid>
      </Container>
    )
  }
}
