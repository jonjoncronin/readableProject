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
