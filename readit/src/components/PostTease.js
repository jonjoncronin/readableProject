import React, { Component } from "react";

class PostTease extends Component {
  render() {
    console.log(this.props);
    const post = this.props.post;

    return (
      <div class="w3-card-2 w3-white" style={{ marginBottom: "8px" }}>
        <div class="w3-container w3-cell-row w3-win8-steel">
          <h5 class="w3-cell w3-cell-middle">{post.title}</h5>
          <div class="w3-cell w3-cell-middle w3-right">u d</div>
        </div>
        <div class="w3-container">{post.body}</div>
      </div>
    );
  }
}

export default PostTease;
