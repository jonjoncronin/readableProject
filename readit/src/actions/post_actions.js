import * as PostsAPI from "../utils/PostsAPI";

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const receivePosts = posts => ({
  type: "RECEIVE_POSTS",
  posts
});

export const fetchPosts = () => dispatch => {
  let res = PostsAPI.getAllPosts()
  .then((posts) => {
    let promises = [];
    posts.forEach((post) => {
      promises.push(
        PostsAPI.getCommentsForPost(post.id)
        .then((comments) => {
          post.comments = comments;
        })
      );
    });
    Promise.all(promises).then(() =>
      dispatch(receivePosts(posts))
    );
  });
  return res;
}

export const VOTE_ON_POST = "VOTE_ON_POST";
export const voteOnPost = (postID, vote) => ({
  type: "VOTE_ON_POST",
  postID,
  vote
});

export const handleVoteOnPost = (postID, vote) => dispatch => {
  dispatch(voteOnPost(postID, vote));
};

export const DELETE_POST = "DELETE_POST";
export const deletePost = postID => ({
  type: "DELETE_POST",
  postID
});

export const handlePostDelete = postID => dispatch => {
  dispatch(deletePost(postID));
};

export const EDIT_POST = "EDIT_POST";
export const editPost = (postID, userInputs) => ({
  type: "EDIT_POST",
  postID,
  userInputs
});

export const handlePostEdit = (postID, userInputs) => dispatch => {
  dispatch(editPost(postID, userInputs));
};

export const ADD_POST = "ADD_POST";
export const addPost = userInputs => ({
  type: "ADD_POST",
  userInputs
});

export const handlePostAdd = userInputs => dispatch => {
  dispatch(addPost(userInputs));
};

export const SORT_POSTS = "SORT_POSTS";
export const sortPosts = sortType => ({
  type: "SORT_POSTS",
  sortType
});

export const handlePostsSort = sortType => dispatch => {
  dispatch(sortPosts(sortType));
};

export const VOTE_ON_COMMENT = "VOTE_ON_COMMENT";
export const voteOnComment = (postID, commentID, vote) => ({
  type: "VOTE_ON_COMMENT",
  postID,
  commentID,
  vote
});

export const handleVoteOnComment = (postID, commentID, vote) => dispatch => {
  dispatch(voteOnComment(postID, commentID, vote));
};
