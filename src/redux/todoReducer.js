import { ADD_TODO, COMPLETED, DELETE } from './actions'


let initialState = [
  {id: 1, title: 'Go to the store', completed: false},
  {id: 2, title: 'Buy some milk', completed: false}
]

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      let newTodo = action.payload
      newTodo.id = state.length+1
      return [...state, newTodo]

    case COMPLETED:
      let currState = [...state]
        currState.map(todo => {
        if (todo.id === action.payload) {
          return todo.completed = !todo.completed
        }
        return todo
      })
      return currState

    case DELETE:
      let delState = [...state].filter(todo => todo.id!==action.payload)
      return delState

    default:
      return state
  }
}
