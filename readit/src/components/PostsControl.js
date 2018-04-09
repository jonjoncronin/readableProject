import React, { Component } from "react";
import Menu from './Menu'


class PostsControl extends Component {

  handleSortSelect = (event) => {
    console.log(event.target.value);
  };

  render() {
    console.log(this.props);

    return (
      <div class="w3-card-4 w3-win8-mauve w3-padding w3-margin-bottom">
        <Menu
          listItems={this.props.listItems}
          onSelectMenu={this.props.onSelectMenu} />

        <div class="w3-card-4 w3-light-gray">
          <button class="w3-button" onClick={() => (console.log("adding post"))}>Add</button>
          <div class="w3-dropdown-hover w3-right">
            <button class="w3-button">sort...</button>
            <div class="w3-dropdown-content w3-bar-block w3-card-4" style={{ right:0 }}>
              <button class="w3-bar-item w3-button" value="byDate" onClick={(event) => this.handleSortSelect(event)}>date posted</button>
              <button class="w3-bar-item w3-button" value="byVote" onClick={(event) => this.handleSortSelect(event)}>vote count</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostsControl;
