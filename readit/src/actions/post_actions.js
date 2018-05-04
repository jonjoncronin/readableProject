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

export const VOTE_ON_POST = 'VOTE_ON_POST';
export const voteOnPost = (postID, vote) => ({
  type: 'VOTE_ON_POST',
  postID,
  vote
});

export const handleVoteOnPost = (postID, vote) => dispatch => {
  dispatch(voteOnPost(postID, vote));
};

export const DELETE_POST = 'DELETE_POST';
export const deletePost = (postID) => ({
  type: 'DELETE_POST',
  postID
});

export const handlePostDelete = (postID) => dispatch => {
  dispatch(deletePost(postID));
};

export const EDIT_POST = 'EDIT_POST';
export const editPost = (postID, userInputs) => ({
  type: 'EDIT_POST',
  postID,
  userInputs
});

export const handlePostEdit = (postID, userInputs) => dispatch => {
  dispatch(editPost(postID, userInputs));
};

export const ADD_POST = 'ADD_POST';
export const addPost = (userInputs) => ({
  type: 'ADD_POST',
  userInputs
});

export const handlePostAdd = (userInputs) => dispatch => {
  dispatch(addPost(userInputs));
};
