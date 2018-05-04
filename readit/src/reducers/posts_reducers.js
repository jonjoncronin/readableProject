import * as PostsAPI from "../utils/PostsAPI";
import uuidv1 from "uuid";

export function posts (state = [], action) {
  switch(action.type) {
    case 'RECEIVE_POSTS': {
      return action.posts;
    }

    case 'VOTE_ON_POST': {
      let newPosts = [...state];
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
        return newPosts;
      }
      else {
        return state;
      }
    }

    case 'ADD_POST': {
      let newPosts = [...state];
      let { title, author, category, body } = action.userInputs;
      let post = {
        id: uuidv1(),
        timestamp: Date.now(),
        title: title,
        body: body,
        author: author,
        category: category,
        voteScore: 1,
        deleted: false,
        commentCount: 0
      };

      newPosts.push(post);
      // Update the backend DB while you're at it.
      PostsAPI.addPost(post);
      return newPosts;
    }

    case 'DELETE_POST': {
      let newPosts = state.filter(entry => {
        return entry.id !== action.postID;
      });
      // Update the backend DB while you're at it.
      PostsAPI.deletePost(action.postID);
      return newPosts;
    }

    case 'EDIT_POST': {
      let newPosts = [...state];
      let postToEdit = newPosts.findIndex((post) => {
        return post.id === action.postID;
      });
      if(postToEdit >= 0) {
        newPosts[postToEdit].title = action.userInputs.title;
        newPosts[postToEdit].body = action.userInputs.body;
        // Update the backend DB while you're at it.
        PostsAPI.editPost(action.postID, action.userInputs.title, action.userInputs.body);
        return newPosts;
      }
      else {
        return state;
      }
    }

    default:
      return state;
  }
}
