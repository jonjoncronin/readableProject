import React, { Component } from "react";
import { Link } from 'react-router-dom';

class PostTease extends Component {
  render() {
    const { post, handleVoteOnPost, handlePostDelete } = this.props;

    return (
      <div className="w3-card-2 w3-white" style={{ marginBottom: "8px" }}>
        <div className="w3-container w3-win8-steel">
          <div className="w3-container w3-padding-small">
            <h6><Link to={"/" + post.category + "/" + post.id}>{post.title}</Link></h6>
          </div>
          <div className="w3-container w3-small">
            Author: {post.author}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Comments: {post.commentCount}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Votes: {post.voteScore}
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
          <Link
            to={"/" + post.category + "/" + post.id + "/edit"}
            className="w3-button">
            edit
          </Link>
          <button
            id="deletePost"
            onClick={(event) => {
              console.log("handle deleting of post");
              handlePostDelete(post.id);
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
