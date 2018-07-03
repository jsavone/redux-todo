import React from 'react'
import { connect } from 'react-redux'
import { ListGroup } from 'reactstrap';
import Todo from './todo'

const TodoList = (props) => {

const todos = props.todos.map(todo => <Todo key={todo.id} todo={todo} />)

  return (
    <ListGroup>
      <h2>Todo List</h2>
      {todos}
    </ListGroup>
  )
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, null)(TodoList);
