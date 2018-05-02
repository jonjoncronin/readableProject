import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { fetchCategories } from '../actions/category_actions'

class Menu extends Component {

  componentDidMount() {
    this.props.fetchMenuCats();
  }

  render() {
    console.log('Menu Props', this.props);
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

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMenuCats: () => dispatch(fetchCategories())
  };
};

const mapStateToProps = (state) => {
  return state.categories;
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
