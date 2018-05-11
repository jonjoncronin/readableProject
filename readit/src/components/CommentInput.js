import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { handleCommentAdd } from "../actions/post_actions";
import serializeForm from "form-serialize";
import { connect } from "react-redux";

class CommentInput extends Component {
  state = {
    addSubmitted: false
  };

  handleSubmit = event => {
    event.preventDefault();
    const { handleCommentAdd, post } = this.props;
    const userInputs = serializeForm(event.target, { hash: true });
    if (handleCommentAdd) {
      handleCommentAdd(post.id, userInputs);
      this.setState(() => ({
        addSubmitted: true
      }));
    }
  };

  render() {
    console.log("CommentInput Props", this.props);
    const { post } = this.props;
    if (this.state.addSubmitted === true) {
      return <Redirect to={`/${post.category}/${post.id}`} />;
    }

    return (
      <div className="w3-card w3-white w3-padding">
        <form onSubmit={this.handleSubmit}>
          <label>Author</label>
          <input
            name="author"
            className="w3-input w3-light-gray w3-hover-white"
            type="text"
            placeholder="Your name..."
          />
          <label>Comment</label>
          <textarea
            name="comment"
            className="w3-input w3-light-gray w3-hover-white"
            placeholder="Your comment..."
          />
          <button className="w3-button">Submit</button>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    handleCommentAdd: (postID, userInputs) => dispatch(handleCommentAdd(postID, userInputs))
  };
};

export default connect(null, mapDispatchToProps)(CommentInput);
