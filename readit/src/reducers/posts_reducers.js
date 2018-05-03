import * as PostsAPI from "../utils/PostsAPI";

export function posts (state = {posts: []}, action) {
  switch(action.type) {
    case 'RECEIVE_POSTS':
      return {
        ...state,
        posts: action.posts
      };

    case 'VOTE_ON_POST':
      let newPosts = [...state.posts];
      let postToEdit = newPosts.findIndex((post) => {
        return post.id === action.postID;
      });
      if(postToEdit >= 0) {
        switch(action.vote) {
          case 'upVote':
            newPosts[postToEdit].voteScore++;
            break;
          case 'downVote':
            newPosts[postToEdit].voteScore--;
            break;
          default:
          return state;
        }
        // Update the backend DB while you're at it.
        PostsAPI.voteOnPost(action.postID, action.vote);
        return {
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
