import * as PostsAPI from "../utils/PostsAPI";

export function posts (state = {posts: []}, action) {
  switch(action.type) {
    case 'RECEIVE_POSTS':
      return {
        ...state,
        posts: action.posts
      };

    case 'VOTE_ON_POST':
      let newPosts = state.posts;
      let postIndexToUpdate = newPosts.findIndex(entry => {
        return entry.id === action.postID;
      });

      if(postIndexToUpdate >= 0) {
        switch(action.vote) {
          case 'upVote':
            newPosts[postIndexToUpdate].voteScore++;
            break;
          case 'downVote':
            newPosts[postIndexToUpdate].voteScore--;
            break;
          default:
          return state;
        }
        // Update the backend DB while you're at it.
        PostsAPI.voteOnPost(action.postID, action.vote);
        return {
          ...state,
          posts: newPosts
        };
      }
      else {
        return state;
      }

    default:
      return state;
  }
}
