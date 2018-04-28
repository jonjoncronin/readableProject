import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';


class Menu extends Component {
  render() {
    console.log('Props', this.props);
    return (
      <div className="w3-card-4 w3-bar w3-black">
        <label className="w3-bar-item">
          Categories -{" "}
          <span className="w3-tiny w3-opacity">{this.props.categories.length} total</span>
        </label>
        <Link to="/" className="w3-bar-item w3-button">All</Link>
        <div className="w3-dropdown-hover">
          <button className="w3-button">choose...</button>
          <div className="w3-dropdown-content w3-bar-block w3-card-4">
          {this.props.categories.map(item => (
            <Link
              key={item}
              className="w3-bar-item w3-button"
              to={"/" + item}
            >
              {item}
            </Link>
          ))}
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(categories) {
  return {categories};
}

export default connect(mapStateToProps)(Menu);
