import React, { Component } from "react";
import { handleCommentAdd } from "../actions/post_actions";
import serializeForm from "form-serialize";
import { connect } from "react-redux";

class CommentInput extends Component {
  state = { expanded: false };

  handleButtonClick = () => {
    this.setState({expanded: !this.state.expanded});
  }

  handleSubmit = event => {
    event.preventDefault();
    const { handleCommentAdd, post } = this.props;
    const userInputs = serializeForm(event.target, { hash: true });
    if (handleCommentAdd) {
      handleCommentAdd(post.id, userInputs);
      event.target.reset();
      this.setState({expanded: !this.state.expanded});
    }
  };

  render() {
    console.log("CommentInput Props", this.props);

    return (
      <div style={{marginBottom:'8px'}}>
        <div className="w3-button w3-block" onClick={() => this.handleButtonClick()}>
          Add a comment ...
        </div>
        <div className={this.state.expanded ? "w3-show": "w3-hide"}>
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
        </div>
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
