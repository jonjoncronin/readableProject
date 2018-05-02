
export function categories (state = {categories: []}, action) {
  switch(action.type)
  {
    case 'RECEIVE_CATEGORIES':
      return {
        ...state,
        categories: action.categories};
    default:
      return state;
  }
}
