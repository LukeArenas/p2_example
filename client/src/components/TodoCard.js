import React, { Component } from 'react'
import { Button, Card, Divider } from 'semantic-ui-react'

export default class TodoCard extends Component {
  render() {
    const { todo, editTodo, openModal } = this.props
    return (
      <Card className="media-card">
        <Card.Content>
          <Card.Description>{todo.todo}</Card.Description>
          <Divider />
          <Button color="red" onClick={() => openModal(todo._id)}>
            Delete Todo
          </Button>
        </Card.Content>
        <Card.Content>
          <Card.Meta>Created On</Card.Meta>
          <Card.Meta>{new Date(todo.createdAt).toLocaleDateString()}</Card.Meta>
        </Card.Content>
      </Card>
    )
  }
}
