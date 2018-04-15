import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Menu from './Menu';


class PostsControl extends Component {

  handleSortSelect = (event) => {
    console.log(event.target.value);
  };

  render() {
    console.log(this.props);

    return (
      <div className="w3-card-4 w3-win8-mauve w3-padding w3-margin-bottom">
        <Menu
          listItems={this.props.listItems} />

        <div className="w3-card-4 w3-light-gray">
          <Link to="/addPost" className="w3-button">Add</Link>
          <div className="w3-dropdown-hover w3-right">
            <button className="w3-button">sort...</button>
            <div className="w3-dropdown-content w3-bar-block w3-card-4" style={{ right:0 }}>
              <button className="w3-bar-item w3-button" value="byDate" onClick={(event) => this.handleSortSelect(event)}>date posted</button>
              <button className="w3-bar-item w3-button" value="byVote" onClick={(event) => this.handleSortSelect(event)}>vote count</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostsControl;
