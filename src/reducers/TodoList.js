import {
  GET_LIST_FAILURE,
  GET_LIST_REQUEST,
  GET_LIST_SUCCESS
} from '../actions'

const defaultState = [];

const TodoList = (state = defaultState, action={}) => {
  const { type, payload } = action
  switch (type) {
      case GET_LIST_REQUEST:
          
          return [...state];

      case GET_LIST_SUCCESS:
          return payload;

      case GET_LIST_FAILURE:
        return [...state];
        
      case 'ADD_TODO':
          const newState = [...state];
          newState.push(action.payload);
          return newState;

      case 'GET_TODO':
          const intState = ['good', 'good1'];
          return intState;
          
      default:
          return state
  }
}

export default TodoList