import React, { Component } from "react";
import PostTease from './PostTease'

class ListPosts extends Component {
  render() {
    console.log(this.props);
    const posts = this.props.posts;

    return (
      <div>
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
