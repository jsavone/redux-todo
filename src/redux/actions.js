export const ADD_TODO = "ADD_TODO"
export const COMPLETED = 'COMPLETED'
export const DELETE = 'DELETE'

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: {title: todo, completed: false}
  }
}

export const completed = (id) => {
  return {
    type: COMPLETED,
    payload: id
  }
}

export const deleteTodo = (id) => {
  return {
    type: DELETE,
    payload: id
  }
}
