import axios from 'axios'
import React, { Component } from 'react'
import { Button, Checkbox, Container, Form } from 'semantic-ui-react'
import { BASE_URL } from '../globals'

export default class TodoForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: props.selectedUser,
      todo: '',
      confirmAdd: false
    }
  }

  submitTodo = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(
        `${BASE_URL}/todos/add/${this.state.currentUser}`,
        { todo: this.state.todo }
      )
      this.props.addTodo(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  toggleCheckBox = () => this.setState({ confirmAdd: !this.state.confirmAdd })

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <Container>
        <Form onSubmit={this.submitTodo}>
          <Form.Field>
            <label>Enter A Todo</label>
            <input
              placeholder="Enter Todo"
              name="todo"
              value={this.state.todo}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox
              label="I want to add this item"
              onClick={this.toggleCheckBox}
              checked={this.state.confirmAdd}
              disabled={!this.state.todo.length}
            />
          </Form.Field>
          <Button
            disabled={!this.state.confirmAdd}
            type="submit"
            content="Submit"
            color="blue"
            labelPosition="right"
            icon="checkmark"
          />
        </Form>
      </Container>
    )
  }
}
