import * as PostsAPI from "../utils/PostsAPI";

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';

export const receiveCategories = categories => ({
  type: 'RECEIVE_CATEGORIES',
  categories
});

export const fetchCategories = () => dispatch => (
  PostsAPI.getAllCategories().then(
    categories => dispatch(receiveCategories(categories))
  ));
