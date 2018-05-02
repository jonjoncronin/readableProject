import React, { Component } from "react";
import PostControl from "./PostControl";

class PostDetail extends Component {

  render() {
    const { post, handlePostDelete } = this.props;
    return (
      <div>
      {
        post ? (
          <div className="w3-card-2 w3-white w3-padding">
            <div className="w3-container w3-win8-steel">
              <div className="w3-container w3-large">
                {post.title}
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
            <div className="w3-container w3-padding w3-light-grey">
              <div className="w3-container">
                <label>Post:</label>
                <div>
                  {post.body}
                </div>
              </div>
            </div>
            <PostControl
              post={post}
              handlePostDelete={handlePostDelete} />
          </div>
        ) : (
          <div className="w3-card-2 w3-black">
            No post found
          </div>
        )
      }
      </div>
    );
  };
}

export default PostDetail;
