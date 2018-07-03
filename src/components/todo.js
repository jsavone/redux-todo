import React from 'react'
import { ListGroupItem } from 'reactstrap';
import { completed, deleteTodo } from '../redux/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const Todo = (props) => {

  let ifSelected = ""
  if (props.todo.completed) {
    ifSelected = "completed"
  }
console.log(props)
  return(
    <ListGroupItem><span className={ifSelected} onClick={()=> props.completed(props.todo.id)}>{props.todo.title}</span> -  <span onClick={()=> props.deleteTodo(props.todo.id)}>delete</span></ListGroupItem>
  )
}



const mapDispatchToProps = dispatch => bindActionCreators({
  completed,
  deleteTodo
}, dispatch)

export default connect(null , mapDispatchToProps)(Todo);
