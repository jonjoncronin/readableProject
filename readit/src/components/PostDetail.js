import React, { Component } from "react";

class PostDetail extends Component {

  render() {
    const { post } = this.props;
    return (
      <div className="w3-card-4 w3-win8-mauve w3-padding">
      {
        post ? (
          <div>
            <div className="w3-container">
              <h3>{post.title}</h3>
            </div>
            <div className="w3-container w3-white">
              {post.body}
            </div>
            <div className="w3-container w3-win8-olive">
              controls
            </div>
          </div>
        ) : (
          <div>
            No post found
          </div>
        )
      }
      </div>
    );
  };
}

export default PostDetail;
