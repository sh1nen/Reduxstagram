import { addComment } from '../actions/actionCreator';
import { ADD_COMMENT, REMOVE_COMMENT } from '../actions/actionCreator';

const comments = (state = [], action) => {
  const { type, payload } = action
  switch(type) {
    case ADD_COMMENT:
      return payload
    default:
      return state
  }
}

export default comments;
