import React, { Component } from 'react'
import { Button, Container, Grid, Header, Menu } from 'semantic-ui-react'
import TodoCard from './TodoCard'

export default class TodoList extends Component {
  render() {
    const { todos, openModal, selectedUser, toggleTodoForm } = this.props
    const button = (
      <Button
        onClick={toggleTodoForm}
        content="Add Todo"
        color="blue"
        labelPosition="right"
        icon="plus"
      />
    )
    const displayItems = () => {
      if (todos.length) {
        return (
          <Container>
            {button}
            <Grid columns={2} padded>
              {todos.map((todo) => (
                <Grid.Column>
                  <TodoCard key={todo._id} todo={todo} openModal={openModal} />
                </Grid.Column>
              ))}
            </Grid>
          </Container>
        )
      } else if (selectedUser && !todos.length) {
        return (
          <Container textAlign="center">
            <Header as="h2">No Todos to Display</Header>
            {button}
          </Container>
        )
      } else {
        return (
          <Container textAlign="center">
            <Header as="h2"> Please Select A User</Header>
          </Container>
        )
      }
    }

    return displayItems()
  }
}
