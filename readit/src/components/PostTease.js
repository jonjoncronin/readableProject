import React, { Component } from "react";
import { Link } from "react-router-dom";
import PostControl from "./PostControl";

class PostTease extends Component {
  render() {
    const { post, handlePostDelete } = this.props;

    return (
      <div className="w3-card-2 w3-white w3-padding" style={{ marginBottom: "8px" }}>
        <div className="w3-container w3-win8-steel">
          <div className="w3-container w3-large">
            <Link to={"/" + post.category + "/" + post.id}>{post.title}</Link>
          </div>
          <div className="w3-container w3-small">
            Date: {new Date(post.timestamp).toDateString()}
          </div>
          <div className="w3-container w3-small">
            Author: {post.author}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Comments: {post.commentCount}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Votes: {post.voteScore}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
        </div>
        <PostControl
          post={post}
          handlePostDelete={handlePostDelete} />
      </div>
    );
  }
}

export default PostTease;
