import React, { Component } from "react";
import { Link } from 'react-router-dom';

class PostTease extends Component {
  render() {
    console.log(this.props);
    const { post, handleVoteOnPost } = this.props;

    return (
      <div className="w3-card-2 w3-white" style={{ marginBottom: "8px" }}>
        <div className="w3-container w3-win8-steel">
          <h5>{post.title}</h5>
          <div className="w3-container w3-small">
            Comments: {post.commentCount}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Votes: {post.voteScore}
          </div>
        </div>
        <div className="w3-container w3-win8-olive">
          <button
            id="upVote"
            onClick={(event) => {
            handleVoteOnPost(post.id, event.target.id);
            }}
            className="w3-button">
            upVote
          </button>
          <button
            id="downVote"
            onClick={(event) => {
            handleVoteOnPost(post.id, event.target.id);
            }}
            className="w3-button">
            downVote
          </button>
          <button
            id="editPost"
            onClick={(event) => {
              console.log("handle editting of post");
            }}
            className="w3-button">
            edit
          </button>
          <button
            id="deletePost"
            onClick={(event) => {
              console.log("handle deleting of post");
            }}
            className="w3-button">
            delete
          </button>
        </div>
      </div>
    );
  }
}

export default PostTease;
