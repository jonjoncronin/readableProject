import * as PostsAPI from "../utils/PostsAPI";

export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export const receivePosts = posts => ({
  type: 'RECEIVE_POSTS',
  posts
});

export const fetchPosts = () => dispatch => (
  PostsAPI.getAllPosts().then(
    posts => dispatch(receivePosts(posts))
  ));
