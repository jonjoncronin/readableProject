import { combineReducers } from "redux";
import { categories } from "./category_reducers";
import { posts } from "./posts_reducers";

export default combineReducers({
  categories,
  posts
});
