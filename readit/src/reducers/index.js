import * as PostsAPI from "../utils/PostsAPI"

function categories (state = [], action) {
  switch(action.type)
  {
    default:
      return ['react', 'redux', 'udacity'];
  }
}

export default categories;
