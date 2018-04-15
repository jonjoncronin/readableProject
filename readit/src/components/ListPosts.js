import React, { Component } from "react";
import PostTease from './PostTease'

class ListPosts extends Component {
  render() {
    console.log(this.props);
    const { posts, category, handleVoteOnPost, handlePostDelete } = this.props;

    return (
      <div>
        {
          posts.length !== 0 ? (
            posts.map(post => (
              <PostTease
                key={post.id}
                post={post}
                handleVoteOnPost={handleVoteOnPost}
                handlePostDelete={handlePostDelete} />
            ))
          ) : (
            <div>
              No posts yet for {category}
            </div>
          )
        }
      </div>
    );
  }
}

export default ListPosts;
