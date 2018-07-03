import React, { Component } from 'react'
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addTodo } from '../redux/actions'

class AddTodo extends Component {
  state = {
    todo: ''
  }

  render() {

    return (
      <Form>
       <h2>Add Todo</h2>
       <FormGroup>

         <Input
         type="text"
         placeholder="Enter new todo"
         onChange={(e)=> this.setState({todo: e.target.value})}
         value={this.state.todo}
         />

       </FormGroup>
       <Button onClick={() => this.props.addTodo(this.state.todo)}>Add</Button>
     </Form>

    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  addTodo
}, dispatch)

export default connect(null, mapDispatchToProps)(AddTodo);
