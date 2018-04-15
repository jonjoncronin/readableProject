import React, { Component } from "react";
import { Link } from "react-router-dom";
import serializeForm from 'form-serialize'

class PostInput extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    const onAddPost = this.props.onAddPost;
    const userInputs = serializeForm(event.target, { hash:true });
    console.log("submittingAdd");
    console.log(userInputs);
    if(onAddPost) {
      onAddPost(userInputs);
    }
  }

  render() {
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
            placeholder="Title for the post..." />

          <label>Author</label>
          <input
            name="author"
            className="w3-input"
            type="text"
            placeholder="Your name..." />

          <label>Category</label>
          <select
            name="category"
            className="w3-input"
            defaultValue="choose">
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
            placeholder="Write something..." />

          <button className="w3-button">Submit</button>
          <Link to="/" className="w3-button w3-right">Cancel</Link>
        </form>

      </div>
    );
  }
}

export default PostInput;
