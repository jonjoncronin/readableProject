import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Menu from './Menu';
import { connect } from 'react-redux';
import { handleVoteOnPost, handlePostDelete } from '../actions/post_actions';

class PostControl extends Component {
  render() {
    console.log('PostControl Props', this.props);
    return (
      <div className="w3-container w3-win8-olive">
        <button
          id="upVote"
          className="w3-button"
          onClick={event => {
            this.props.handleVoteOnPost(this.props.post.id, event.target.id);
          }}
        >
          upVote
        </button>
        <button
          id="downVote"
          className="w3-button"
          onClick={event => {
            this.props.handleVoteOnPost(this.props.post.id, event.target.id);
          }}
        >
          downVote
        </button>
        <Link
          to={"/" + this.props.post.category + "/" + this.props.post.id + "/edit"}
          className="w3-button"
        >
          edit
        </Link>
        <button
          id="deletePost"
          className="w3-button"
          onClick={event => {
            console.log("handle deleting of post");
            this.props.handlePostDelete(this.props.post.id);
          }}
        >
          delete
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleVoteOnPost: (postID, vote) => dispatch(handleVoteOnPost(postID, vote)),
    handlePostDelete: (postID) => dispatch(handlePostDelete(postID))
  };
};

const mapStateToProps = (state) => {
  return state.posts;
};

export default connect(mapStateToProps, mapDispatchToProps)(PostControl);
