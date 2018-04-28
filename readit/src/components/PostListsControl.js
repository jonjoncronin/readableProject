import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Menu from './Menu';


class PostListsControl extends Component {
  render() {
    // const listItems = this.props.listItems;
    const onSortPosts = this.props.onSortPosts;
    return (
      <div className="w3-card-4 w3-win8-mauve w3-padding w3-margin-bottom">
        <Menu />

        <div className="w3-card-4 w3-light-gray">
          <Link to="/addPost" className="w3-button">Add</Link>
          <div className="w3-dropdown-hover w3-right">
            <button className="w3-button">sort...</button>
            <div className="w3-dropdown-content w3-bar-block w3-card-4" style={{ right:0 }}>
              <button className="w3-bar-item w3-button" value="timestamp" onClick={(event) => onSortPosts(event.target.value)}>date posted</button>
              <button className="w3-bar-item w3-button" value="voteScore" onClick={(event) => onSortPosts(event.target.value)}>vote count</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostListsControl;
