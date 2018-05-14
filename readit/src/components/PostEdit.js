import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import serializeForm from "form-serialize";
import { connect } from "react-redux";
import { handlePostEdit } from "../actions/post_actions";

class PostEdit extends Component {
  state = {
    editSubmitted: false
  };

  handleSubmit = event => {
    event.preventDefault();
    // console.log("submitting");
    const { postID, handlePostEdit } = this.props;
    const userInputs = serializeForm(event.target, { hash: true });
    // console.log(userInputs);
    if (handlePostEdit) {
      handlePostEdit(postID, userInputs);
      // return to the root page
      this.setState(() => ({
        editSubmitted: true
      }));
    }
  };

  render() {
    // console.log("PostEdit Props", this.props);
    const { postID, posts } = this.props;

    let post = posts.find(entry => {
      return entry.id === postID;
    });

    if (this.state.editSubmitted === true) {
      return <Redirect to={`/${post.category}/${postID}`} />;
    }

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
    posts: state.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handlePostEdit: (postID, userInputs) =>
      dispatch(handlePostEdit(postID, userInputs))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostEdit);
