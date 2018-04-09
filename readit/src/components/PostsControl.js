import React, { Component } from "react";

class PostsControl extends Component {
  render() {
    console.log(this.props);

    return (
      <div class="w3-card-4 w3-cell-row w3-win8-mauve w3-padding w3-margin-bottom">
        <h3 class="w3_cell w3-cell-middle">Posts Header</h3>
        <div class="w3-cell w3-cell-bottom">
          <select
            defaultValue="filter"
            onChange={(event) => (
              console.log(event.target.value + " selected")
            )}>
            <option value="filter" disabled>Filter by...</option>
            <option value="byDate">date posted</option>
            <option value="byVote">vote count</option>
          </select>
        </div>
        <div class="w3-cell w3-cell-bottom">
          <button onClick={() => (console.log("adding post"))}>Add</button>
        </div>
      </div>
    );
  }
}

export default PostsControl;
