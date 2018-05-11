import * as PostsAPI from "../utils/PostsAPI";
import uuidv1 from "uuid";
import sortBy from "sort-by";

let descending = true;

export function posts(state = [], action) {
  switch (action.type) {
    case "RECEIVE_POSTS": {
      return action.posts;
    }

    case "SORT_POSTS": {
      let newPosts = [...state];
      let direction = "";
      if (descending) {
        direction = "-";
      }
      let sortString = direction + action.sortType;
      newPosts.sort(sortBy(sortString));
      descending = !descending;
      return newPosts;
    }

    case "VOTE_ON_POST": {
      let newPosts = [...state];
      let postToEdit = newPosts.findIndex(post => {
        return post.id === action.postID;
      });
      if (postToEdit >= 0) {
        switch (action.vote) {
          case "upVote":
            newPosts[postToEdit].voteScore++;
            break;
          case "downVote":
            newPosts[postToEdit].voteScore--;
            break;
          default:
            return state;
        }
        // Update the backend DB while you're at it.
        PostsAPI.voteOnPost(action.postID, action.vote);
        return newPosts;
      } else {
        return state;
      }
    }

    case "ADD_POST": {
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
        commentCount: 0,
        comments: []
      };

      newPosts.push(post);
      // Update the backend DB while you're at it.
      PostsAPI.addPost(post);
      return newPosts;
    }

    case "DELETE_POST": {
      let newPosts = state.filter(entry => {
        return entry.id !== action.postID;
      });
      // Update the backend DB while you're at it.
      PostsAPI.deletePost(action.postID);
      return newPosts;
    }

    case "EDIT_POST": {
      let newPosts = [...state];
      let postToEdit = newPosts.findIndex(post => {
        return post.id === action.postID;
      });
      if (postToEdit >= 0) {
        newPosts[postToEdit].title = action.userInputs.title;
        newPosts[postToEdit].body = action.userInputs.body;
        // Update the backend DB while you're at it.
        PostsAPI.editPost(
          action.postID,
          action.userInputs.title,
          action.userInputs.body
        );
        return newPosts;
      } else {
        return state;
      }
    }

    case "VOTE_ON_COMMENT": {
      console.log("CommentVote Actions: ", action);

      let newPosts = JSON.parse(JSON.stringify(state));
      // at this point everything is cloned including the comments array.
      let postToEdit = newPosts.find(post => {
        return post.id === action.postID;
      });

      if (postToEdit) {
        let commentToEdit = postToEdit.comments.find(comment => {
          return comment.id === action.commentID;
        });

        if (commentToEdit) {
          switch (action.vote) {
            case "upVote":
              commentToEdit.voteScore++;
              break;
            case "downVote":
              commentToEdit.voteScore--;
              break;
            default:
              return state;
          }

          // Update the backend DB while you're at it.
          PostsAPI.voteOnComment(action.commentID, action.vote);
          return newPosts;
        } else {
          return state;
        }
      }
      return state;
    }

    case "DELETE_COMMENT": {
      console.log("CommentDelete Actions: ", action);

      let newPosts = JSON.parse(JSON.stringify(state));
      // at this point everything is cloned including the comments array.
      let postToEdit = newPosts.find(post => {
        return post.id === action.postID;
      });

      if (postToEdit) {
        postToEdit.comments = postToEdit.comments.filter(entry => {
          return entry.id !== action.commentID;
        });
        // Update the backend DB while you're at it.
        PostsAPI.deleteComment(action.commentID);
        return newPosts;
      } else {
        return state;
      }
    }

    case "EDIT_COMMENT": {
      console.log("CommentEdit Actions: ", action);

      let newPosts = JSON.parse(JSON.stringify(state));
      // at this point everything is cloned including the comments array.
      let postToEdit = newPosts.find(post => {
        return post.id === action.postID;
      });

      if (postToEdit) {
        let commentToEdit = postToEdit.comments.find(comment => {
          return comment.id === action.commentID;
        });
        if (commentToEdit) {
          commentToEdit.body = action.userInputs.comment;
          // Update the backend DB while you're at it.
          PostsAPI.editComment(action.commentID, action.userInputs.comment);
          return newPosts;
        } else {
          return state;
        }
      } else {
        return state;
      }
    }

    case "ADD_COMMENT": {
      console.log("CommentAdd Actions: ", action);

      let newPosts = JSON.parse(JSON.stringify(state));
      // at this point everything is cloned including the comments array.
      let postToEdit = newPosts.find(post => {
        return post.id === action.postID;
      });

      if (postToEdit) {
        let { author, comment } = action.userInputs;
        let someId = uuidv1();
        let newComment = {
          id: someId,
          parentId: action.postID,
          timestamp: Date.now(),
          body: comment,
          author: author,
          voteScore: 0,
          deleted: false,
          parentDeleted: false
        };

        postToEdit.comments.push(newComment);
        // Update the backend DB while you're at it.
        PostsAPI.addCommentToPost(newComment);
        return newPosts;
      } else {
        return state;
      }
    }

    default:
      return state;
  }
}
