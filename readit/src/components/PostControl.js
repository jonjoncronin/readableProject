import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Menu from './Menu';


class PostControl extends Component {
  render() {
    const { post, handleVoteOnPost, handlePostDelete } = this.props;
    return (
      <div className="w3-container w3-win8-olive">
        <button
          id="upVote"
          onClick={event => {
            handleVoteOnPost(post.id, event.target.id);
          }}
          className="w3-button"
        >
          upVote
        </button>
        <button
          id="downVote"
          onClick={event => {
            handleVoteOnPost(post.id, event.target.id);
          }}
          className="w3-button"
        >
          downVote
        </button>
        <Link
          to={"/" + post.category + "/" + post.id + "/edit"}
          className="w3-button"
        >
          edit
        </Link>
        <button
          id="deletePost"
          onClick={event => {
            console.log("handle deleting of post");
            handlePostDelete(post.id);
          }}
          className="w3-button"
        >
          delete
        </button>
      </div>
    );
  }
}

export default PostControl;
