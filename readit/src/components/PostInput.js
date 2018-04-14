import React, { Component } from "react";
import { Link } from "react-router-dom";

class PostInput extends Component {
  state = {
    title: '',
    author: '',
    category: '',
    body: ''
  };

  somePost = {title: "dummy title", author: "dummy author", category: "react", body: "dummy body"};

  handleInputChanges = (event) => {
    this.setState({[event.target.name]: event.target.value})
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if(this.props.onAddPost) {
      this.props.onAddPost(this.state);
    }

  }

  render() {
    console.log(this.props);
    let selectedCategory;
    return (
      <div className="w3-card-4 w3-win8-mauve w3-padding">

        <div className="w3-container">
          <h2>Add new post ...</h2>
        </div>

        <form
          onSubmit={this.handleSubmit}
          className="w3-container w3-padding">

          <label>Title</label>
          <input
            name="title"
            className="w3-input"
            type="text"
            placeholder="Title for the post..."
            onChange={this.handleInputChanges} />

          <label>Author</label>
          <input
            name="author"
            className="w3-input"
            type="text"
            placeholder="Your name..."
            onChange={this.handleInputChanges} />

          <label>Category</label>
          <select
            name="category"
            className="w3-input"
            defaultValue="choose"
            onChange={this.handleInputChanges} >
            <option key="choose" value="choose" disabled>Choose one...</option>

            {this.props.categories.map(item => (
                <option
                  key={item.name}
                  value={item.name}
                >
                  {item.name}
                </option>
            ))}
          </select>

          <label>Post</label>
          <textarea
            name="body"
            className="w3-input"
            placeholder="Write something..."
            onChange={this.handleInputChanges} />

          <button className="w3-button">Submit</button>
          <Link to="/" className="w3-button w3-right">Cancel</Link>
        </form>

      </div>
    );
  }
}

export default PostInput;
