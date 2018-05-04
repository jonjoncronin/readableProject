import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="w3-cell-row w3-blue-gray w3-margin-bottom w3-margin-top w3-padding-large">
        <h3>
          <Link to="/">Readit</Link> - a blantant rip off
        </h3>
      </div>
    );
  }
}

export default Header;
