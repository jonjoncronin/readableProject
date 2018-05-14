import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Menu extends Component {
  render() {
    // console.log("Menu Props: ", this.props);
    const { categories } = this.props;
    return (
      <div className="w3-card-4 w3-bar w3-black">
        <label className="w3-bar-item">
          Categories -{" "}
          <span className="w3-tiny w3-opacity">{categories.length} total</span>
        </label>
        <Link to="/" className="w3-bar-item w3-button">
          All
        </Link>
        <div className="w3-dropdown-hover">
          <button className="w3-button">choose...</button>
          <div className="w3-dropdown-content w3-bar-block w3-card-4">
            {categories.map(item => (
              <Link
                key={item.name}
                className="w3-bar-item w3-button"
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

const mapStateToProps = state => {
  return { categories: state.categories };
};

export default connect(mapStateToProps)(Menu);
