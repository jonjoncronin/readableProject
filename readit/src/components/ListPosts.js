import React, { Component } from "react";
import PostTease from './PostTease'

class ListPosts extends Component {
  render() {
    console.log(this.props);
    const { posts, handleVoteOnPost } = this.props;

    return (
      <div>
        {
          posts.map(post => (
            <PostTease key={post.id} post={post} handleVoteOnPost={handleVoteOnPost} />
          ))
        }
      </div>
    );
  }
}

export default ListPosts;
