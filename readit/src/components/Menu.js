import React, { Component } from "react";
import { Link } from "react-router-dom";

class Menu extends Component {
  render() {
    console.log(this.props);
    const { listItems, onSelectMenu } = this.props;
    return (
      <div class="w3-card-4 w3-bar w3-black">
        <label class="w3-bar-item">
          Categories -{" "}
          <span class="w3-tiny w3-opacity">{listItems.length} total</span>
        </label>
        <Link to="/" class="w3-bar-item w3-button">All</Link>
        <div class="w3-dropdown-hover">
          <button class="w3-button">choose...</button>
          <div class="w3-dropdown-content w3-bar-block w3-card-4">
            {listItems.map(item => (
              <Link
                key={item.name}
                class="w3-bar-item w3-button"
                to={"/" + item.name}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
