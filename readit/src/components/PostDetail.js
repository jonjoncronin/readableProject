import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as PostsAPI from "../utils/PostsAPI";

class PostDetail extends Component {
  state = { thePost: null };

  componentDidMount() {
    PostsAPI.getPost(this.props.postID)
    .then((post) => {
      console.log(post);
      this.setState({thePost: post});
    });
  };

  render() {
    console.log(this.state.thePost)
    return (
      <div className="w3-card-4 w3-win8-mauve w3-padding">
      {
        this.state.thePost ? (
          <div>
            <div className="w3-container">
              <h3>{this.state.thePost.title}</h3>
            </div>
            <div className="w3-container w3-white">
              {this.state.thePost.body}
            </div>
            <div className="w3-container w3-win8-olive">
              controls
            </div>
          </div>
        ) : (
          <div>
            No post found for postID {this.props.postID}
          </div>
        )
      }
      </div>
    );
  };
}

export default PostDetail;
