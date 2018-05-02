
export function posts (state = {posts: []}, action) {
  switch(action.type)
  {
    case 'RECEIVE_POSTS':
      return {
        ...state,
        posts: action.posts};
    default:
      return state;
  }
}
