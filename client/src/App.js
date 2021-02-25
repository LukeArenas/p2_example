import React, { Component } from 'react'
import UserList from './components/UserList'
import './styles/App.css'
import axios from 'axios'
import { BASE_URL } from './globals'
import { Container, Grid, Modal, Button } from 'semantic-ui-react'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      users: [],
      selectedUser: null,
      wantsDeleteTodo: false,
      todos: [],
      todoDeleting: null,
      wantsAddTodo: false
    }
  }

  componentDidMount() {
    this.getUsers()
  }

  getUsers = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/users/view`)
      this.setState({ users: res.data })
    } catch (error) {
      console.log(error)
    }
  }

  addTodo = (todo) => {
    this.setState({ todos: [...this.state.todos, todo] })
    this.toggleTodoForm()
  }

  loadTodos = async () => {
    try {
      const res = await axios.get(
        `${BASE_URL}/todos/view/${this.state.selectedUser}`
      )
      this.setState({ todos: res.data })
    } catch (error) {
      console.log(error)
    }
  }

  selectUser = (userId) =>
    this.setState({ selectedUser: userId, wantsAddTodo: false }, () =>
      this.loadTodos()
    )

  clear = () =>
    this.setState({ todos: [], selectedUser: null, wantsAddTodo: false })

  deleteTodo = async () => {
    try {
      const res = await axios.delete(
        `${BASE_URL}/todos/remove/${this.state.todoDeleting}`
      )
      this.setState({
        todos: this.state.todos.filter((todo) => todo._id !== res.data.payload),
        wantsDeleteTodo: false,
        todoDeleting: null
      })
    } catch (error) {
      console.log(error)
    }
  }

  openModal = (todoId) =>
    this.setState({ wantsDeleteTodo: true, todoDeleting: todoId })

  closeModal = () => this.setState({ wantsDeleteTodo: false })

  toggleTodoForm = () =>
    this.setState({ wantsAddTodo: !this.state.wantsAddTodo })

  render() {
    return (
      <Container>
        <Grid
          relaxed
          columns={2}
          divided
          padded
          className="page-grid"
          container
        >
          <Grid.Column>
            <UserList
              users={this.state.users}
              selectUser={this.selectUser}
              selectedUser={this.state.selectedUser}
              clear={this.clear}
            />
          </Grid.Column>
          <Grid.Column>
            {this.state.wantsAddTodo ? (
              <TodoForm
                addTodo={this.addTodo}
                selectedUser={this.state.selectedUser}
              />
            ) : (
              <TodoList
                todos={this.state.todos}
                openModal={this.openModal}
                selectedUser={this.state.selectedUser}
                toggleTodoForm={this.toggleTodoForm}
              />
            )}
          </Grid.Column>
        </Grid>
        <Modal open={this.state.wantsDeleteTodo}>
          <Modal.Header>
            Are you sure you want to delete this todo?
          </Modal.Header>
          <Modal.Content>
            <Modal.Description>
              By selecting yes, you are permanently deleting this item.
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button
              content="Yes, I want to delete it!"
              color="red"
              icon="checkmark"
              labelPosition="left"
              onClick={this.deleteTodo}
            />
            <Button
              content="Nevermind, I think i'll keep it."
              color="blue"
              icon="close"
              labelPosition="right"
              onClick={this.closeModal}
            />
          </Modal.Actions>
        </Modal>
      </Container>
    )
  }
}
