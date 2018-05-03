import React, { Component } from "react";
import PostTease from './PostTease'
import { connect } from 'react-redux';

class ListPosts extends Component {

  render() {
    console.log('ListPosts Props', this.props);
    const { posts, category } = this.props;
    let postsToView = [];
    if(category) {
      postsToView = posts.filter((entry) => {
        return entry.category === category
      });
    }
    else {
      postsToView = posts;
    }
    return (
      <div>
        {
          postsToView.length !== 0 ? (
            postsToView.map(post => (
              <PostTease
                key={post.id}
                post={post} />
            ))
          ) : (
            <div>
              No posts yet for this category
            </div>
          )
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state.posts;
};

export default connect(mapStateToProps)(ListPosts);
