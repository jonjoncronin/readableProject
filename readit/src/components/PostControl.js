import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { handleVoteOnPost, handlePostDelete } from "../actions/post_actions";

class PostControl extends Component {
  render() {
    // console.log("PostControl Props", this.props);
    const { post, handleVoteOnPost, handlePostDelete } = this.props;
    return (
      <div className="w3-container w3-win8-olive">
        <button
          id="upVote"
          className="w3-button"
          onClick={event => {
            handleVoteOnPost(post.id, event.target.id);
          }}
        >
          upVote
        </button>
        <button
          id="downVote"
          className="w3-button"
          onClick={event => {
            handleVoteOnPost(post.id, event.target.id);
          }}
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
          className="w3-button"
          onClick={event => {
            // console.log("handle deleting of post");
            handlePostDelete(post.id);
          }}
        >
          delete
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleVoteOnPost: (postID, vote) =>
      dispatch(handleVoteOnPost(postID, vote)),
    handlePostDelete: postID => dispatch(handlePostDelete(postID))
  };
};

export default connect(null, mapDispatchToProps)(PostControl);
