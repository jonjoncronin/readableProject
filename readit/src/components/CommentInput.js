import React, { Component } from "react";

class CommentInput extends Component {
  render() {
    console.log("CommentInput Props", this.props);

    return (
      <div className="w3-card w3-white w3-padding">
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
      </div>
    );
  }
}

export default CommentInput;
