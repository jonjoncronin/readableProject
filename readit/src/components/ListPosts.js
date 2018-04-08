import React, { Component } from "react";
import PostTease from './PostTease'

class ListPosts extends Component {
  render() {
    console.log(this.props);
    const posts = this.props.posts;

    return (
      <div class="w3-container w3-cell w3-bar-block" style={{ width: "100%" }}>
        <div class="w3-card-4 w3-win8-mauve w3-padding w3-margin-bottom">
          <h3>Posts Header</h3>
        </div>
        {
          posts.map(post => (
            <PostTease key={post.id} post={post} />
          ))
        }
      </div>
    );
  }
}

export default ListPosts;
