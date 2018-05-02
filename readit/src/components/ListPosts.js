import React, { Component } from "react";
import PostTease from './PostTease'
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/post_actions';

class ListPosts extends Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    console.log('ListPosts Props', this.props);
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

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts())
  };
};

const mapStateToProps = (state) => {
  return state.posts;
};

export default connect(mapStateToProps, mapDispatchToProps)(ListPosts);
