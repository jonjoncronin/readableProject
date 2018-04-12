import React, { Component } from "react";
import { Link } from "react-router-dom";

class PostInput extends Component {

  onSelectMenu = (name) => {
    console.log(name);
  };
  render() {
    console.log(this.props);
    let selectedCategory;
    return (
      <div className="w3-card-4 w3-win8-mauve w3-padding">

        <div className="w3-container">
          <h2>Add new post ...</h2>
        </div>

        <form className="w3-container w3-padding">

          <label>Title</label>
          <input className="w3-input" type="text" placeholder="Title for the post..."/>

          <label>Author</label>
          <input className="w3-input" type="text" placeholder="Your name..."/>

          <label>Category</label>
          <select className="w3-input">
            {this.props.categories.map(item => (
                <option
                  key={item.name}
                  value={item.name}
                  onClick={event => this.onSelectMenu(item.name)}
                >
                  {item.name}
                </option>
            ))}
          </select>

          <label>Post</label>
          <textarea className="w3-input" placeholder="Write something..." />

          <input className="w3-button" type="submit" value="Submit" />
          <Link to="/" className="w3-button w3-right">Cancel</Link>
        </form>

      </div>
    );
  }
}

export default PostInput;
