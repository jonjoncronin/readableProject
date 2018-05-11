import React, { Component } from "react";
import CommentInput from "./CommentInput";
import CommentDetail from "./CommentDetail";
import sortBy from "sort-by";

class ListComments extends Component {
  render() {
    console.log("ListComments Props", this.props);
    const { post, comments } = this.props;
    let commentsToDisplay = comments.sort(sortBy("timestamp"));

    return (
      <div>
        <CommentInput post={post} />
        {commentsToDisplay.length !== 0 ? (
          commentsToDisplay.map(comment => (
            <CommentDetail key={comment.id} post={post} comment={comment} />
          ))
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default ListComments;
