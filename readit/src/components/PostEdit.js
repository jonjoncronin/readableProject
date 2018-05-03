import React, { Component } from "react";
import { Link } from "react-router-dom";
import serializeForm from "form-serialize";
import { connect } from "react-redux";

class PostEdit extends Component {
  handleSubmit = event => {
    event.preventDefault();
    console.log("submitting");
    const post = this.props.post;
    const onEditPost = this.props.onEditPost;
    const userInputs = serializeForm(event.target, { hash: true });
    console.log(userInputs);
    console.log(post.id);
    if (onEditPost) {
      onEditPost(userInputs, post.id);
    }
  };

  render() {
    console.log("PostEdit Props", this.props);
    const { postID, categories, posts } = this.props;

    let post = posts.find(entry => {
      return entry.id === postID;
    });

    return (
      <div className="w3-card-4 w3-win8-mauve w3-padding">
        <div className="w3-container">
          <h2>Edit existing post ...</h2>
        </div>

        <form onSubmit={this.handleSubmit} className="w3-container w3-padding">
          <label>Title</label>
          <input
            name="title"
            className="w3-input"
            type="text"
            placeholder={post ? post.title : ""}
            defaultValue={post ? post.title : ""}
            onChange={this.handleInputChanges}
          />

          <label>Author</label>
          <input
            name="author"
            className="w3-input"
            type="text"
            placeholder={post ? post.author : ""}
            value={post ? post.author : ""}
            readOnly
            disabled
          />

          <label>Category</label>
          <select
            name="category"
            className="w3-input"
            defaultValue={post ? post.category : "choose"}
          >
            <option key="choose" value="choose" disabled>
              Choose one...
            </option>

            {categories.map(item => (
              <option key={item.name} value={item.name} disabled>
                {item.name}
              </option>
            ))}
          </select>

          <label>Post</label>
          <textarea
            name="body"
            className="w3-input"
            placeholder={post ? post.body : ""}
            defaultValue={post ? post.body : ""}
            onChange={this.handleInputChanges}
          />

          <button className="w3-button">Save</button>
          <Link to="/" className="w3-button w3-right">
            Cancel
          </Link>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories,
    posts: state.posts.posts
  };
};

export default connect(mapStateToProps)(PostEdit);
