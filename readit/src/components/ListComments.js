import React, { Component } from "react";
import CommentInput from "./CommentInput";
import { connect } from "react-redux";
import { handleVoteOnComment,
         handleCommentDelete,
         handleCommentEdit } from "../actions/post_actions";
import serializeForm from "form-serialize";
import sortBy from "sort-by";

class ListComments extends Component {
  state = {
    editting: false,
  };

  handleEditButtonClick = () => {
    this.setState({editting: !this.state.editting});
  };

  handleEditSubmit = ( commentID, event) => {
    event.preventDefault();
    const { handleCommentEdit, post } = this.props;
    const userInputs = serializeForm(event.target, { hash: true });
    if (handleCommentEdit) {
      console.log("Submit comment Edit: ", userInputs);
      console.log("Comment to be editted: ", commentID);
      handleCommentEdit(post.id, commentID, userInputs);
      this.setState({editting: false});
    }
  };

  render() {
    console.log("ListComments Props", this.props);
    const { post, comments, handleVoteOnComment, handleCommentDelete, handleCommentEdit } = this.props;
    let commentsToDisplay = comments.sort(sortBy("timestamp"));

    return (
      <div>
        <CommentInput post={post} />
        {commentsToDisplay.length !== 0 ? (
          commentsToDisplay.map(comment =>
            <div key={comment.id} className="w3-card-4 w3-white" style={{marginBottom:'8px'}}>
              <div className="w3-container w3-padding">
                <div className="w3-small">
                  {`Date: ${new Date(comment.timestamp).toDateString()}`}
                </div>
                <div className="w3-small w3-border-bottom">
                  Author: {comment.author}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Votes: {comment.voteScore}
                </div>
                <div className={!this.state.editting ? "w3-show": "w3-hide"}>
                  {comment.body}
                </div>
                <form className={this.state.editting ? "w3-show": "w3-hide"} onSubmit={event => {
                  this.handleEditSubmit(comment.id,event)}}
                >
                  <div className="w3-light-blue w3-show">
                    <textarea
                      name="comment"
                      className="w3-input w3-light-grey w3-hover-white"
                      placeholder={comment ? comment.body : ""}
                      defaultValue={comment ? comment.body : ""}
                    />
                    <button
                      id="submitEdit"
                      className="w3-button"
                    >
                      Save
                    </button>
                    <button id="editCancel" className="w3-button w3-right" onClick={() => this.handleEditButtonClick()}>Cancel</button>
                  </div>
                </form>
              </div>
              <div className="w3-container w3-win8-taupe">
              <button
                id="upVote"
                className="w3-button"
                onClick={event => {
                  handleVoteOnComment(post.id, comment.id, event.target.id);
                }}
              >
                upVote
              </button>
              <button
                id="downVote"
                className="w3-button"
                onClick={event => {
                  handleVoteOnComment(post.id, comment.id, event.target.id);
                }}
              >
                downVote
              </button>
                <button
                  className="w3-button"
                  onClick={() => this.handleEditButtonClick()}
                >
                  edit
                </button>
                <button
                  id="deletePost"
                  className="w3-button"
                  onClick={event => {
                    console.log("handle deleting of comment");
                    handleCommentDelete(post.id, comment.id);
                  }}
                >
                  delete
                </button>
              </div>
            </div>)
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    handleVoteOnComment: (postID, commentID, vote) => dispatch(handleVoteOnComment(postID, commentID, vote)),
    handleCommentDelete: (postID, commentID) => dispatch(handleCommentDelete(postID, commentID)),
    handleCommentEdit: (postID, commentID, userInputs) => dispatch(handleCommentEdit(postID, commentID, userInputs))
  };
};

export default connect(null, mapDispatchToProps)(ListComments);
