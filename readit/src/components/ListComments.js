import React, { Component } from "react";

class ListComments extends Component {
  render() {
    console.log("ListComments Props", this.props);
    const { comments } = this.props;
    return (
      <div>
        <div>
          <button className="w3-button w3-block">Write a comment ...</button>
          <div className="w3-card w3-white w3-padding" style={{marginBottom:'8px'}}>
            <label>Author</label>
            <input
              name="author"
              className="w3-input"
              type="text"
              placeholder="Your name..."
            />
            <label>Comment</label>
            <textarea
              name="comment"
              className="w3-input"
              placeholder="Your comment..."
            />
            <button className="w3-button">Submit</button>
            <button className="w3-button w3-right">
              Cancel
            </button>
          </div>
        </div>
        {comments.length !== 0 ? (
          comments.map(comment =>
            <div key={comment.id} className="w3-card-4 w3-white" style={{marginBottom:'8px'}}>
              <div className="w3-container w3-padding">
                <div className="w3-small">
                  {`Date: ${new Date(comment.timestamp).toDateString()}`}
                </div>
                <div className="w3-small w3-border-bottom">
                  Author: {comment.author}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Votes: {comment.voteScore}
                </div>
                {comment.body}
              </div>
              <div className="w3-container w3-win8-taupe">
                <button
                  id="upVote"
                  className="w3-button"

                >
                  upVote
                </button>
                <button
                  id="downVote"
                  className="w3-button"

                >
                  downVote
                </button>
                <button
                  className="w3-button"
                >
                  edit
                </button>
                <button
                  id="deletePost"
                  className="w3-button"

                >
                  delete
                </button>
              </div>
            </div>)
        ) : (
          <div>No posts yet for this category</div>
        )}
      </div>
    );
  }
}

export default ListComments;
