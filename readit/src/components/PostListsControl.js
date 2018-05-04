import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Menu from './Menu';
import { connect } from 'react-redux';
import { handlePostsSort } from '../actions/post_actions';

class PostListsControl extends Component {
  render() {
    console.log('PostListsControl Props: ', this.props);
    const { handlePostsSort } = this.props;
    return (
      <div className="w3-card-4 w3-win8-mauve w3-padding w3-margin-bottom">
        <Menu />

        <div className="w3-card-4 w3-light-gray">
          <Link to="/addPost" className="w3-button">Add</Link>
          <div className="w3-dropdown-hover w3-right">
            <button className="w3-button">sort...</button>
            <div className="w3-dropdown-content w3-bar-block w3-card-4" style={{ right:0 }}>
              <button className="w3-bar-item w3-button" value="timestamp" onClick={(event) => handlePostsSort(event.target.value)}>date posted</button>
              <button className="w3-bar-item w3-button" value="voteScore" onClick={(event) => handlePostsSort(event.target.value)}>vote count</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handlePostsSort: (type) => dispatch(handlePostsSort(type)),
  };
};

export default connect(null, mapDispatchToProps)(PostListsControl);
