import React, { Component } from 'react'
import { Button, Card, Divider } from 'semantic-ui-react'

export default class UserCard extends Component {
  render() {
    const { user, selectUser, selectedUser, clear } = this.props
    const renderButton = () => {
      if (selectedUser && selectedUser === user._id) {
        return (
          <Button basic color="red" onClick={clear}>
            Hide Todos
          </Button>
        )
      }
      return (
        <Button basic color="blue" onClick={() => selectUser(user._id)}>
          View Todos
        </Button>
      )
    }

    return (
      <Card>
        <Card.Content>
          <Card.Header>{user.name}</Card.Header>
          <Card.Meta>{user.email}</Card.Meta>
          <Divider />
          {renderButton()}
        </Card.Content>
      </Card>
    )
  }
}
