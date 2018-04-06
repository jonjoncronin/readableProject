import React, { Component } from "react";
import "./App.css";
import * as PostsAPI from './utils/PostsAPI'

class App extends Component {

  componentDidMount () {
    // PostsAPI.getCommentsForPost("8xf0y6ziyjabvozdd253nd")
    // .then(comments => console.log(comments))
    // PostsAPI.getPost("8xf0y6ziyjabvozdd253nd")
    // .then(post => console.log(post))
    // PostsAPI.getAllCategories()
    // .then(categories => console.log(categories))
    // .then(() => {
    //   PostsAPI.getPostsForCategory("redux")
    //   .then(posts => console.log(posts))
    // })
    // PostsAPI.getComment("8tu4bsun805n8un48ve89")
    // .then(comment => console.log(comment))
  }

  render() {
    return (
      <div style={{ margin: "auto", maxWidth: "900px" }}>
        <div class="w3-cell-row w3-blue-gray w3-margin-bottom w3-margin-top w3-padding-large">
          <h3>Readit - a blantant rip off</h3>
        </div>
        <div class="w3-container w3-cell" style={{ width: "20%" }}>
          <div class="w3-bar-block w3-card-2 w3-light-gray">
            Category Menu
            <br />
            <a href="#" class="w3-bar-item w3-button">
              Category 1
            </a>
            <a href="#" class="w3-bar-item w3-button">
              Category 2
            </a>
            <a href="#" class="w3-bar-item w3-button">
              Category 3
            </a>
          </div>
        </div>
        <div
          class="w3-container w3-cell w3-bar-block"
          style={{ width: "100%" }}
        >
          <div class="w3-card-4 w3-win8-mauve w3-padding w3-margin-bottom">
            <h3>Posts Header</h3>
          </div>
          <div class="w3-card-2 w3-white" style={{marginBottom: "8px"}}>
            <div class="w3-container w3-cell-row w3-win8-steel">
              <h5 class="w3-cell w3-cell-middle">Post 1 title</h5>
              <div class="w3-cell w3-cell-middle w3-right">
                u d
              </div>
            </div>
            <div class="w3-container">Post 1 short view</div>
          </div>
          <div class="w3-card-2 w3-white" style={{marginBottom: "8px"}}>
            <div class="w3-container w3-cell-row w3-win8-steel">
              <h5 class="w3-cell w3-cell-middle">Post 2 title</h5>
              <div class="w3-cell w3-cell-middle w3-right">
                u d
              </div>
            </div>
            <div class="w3-container">Post 2 short view</div>
          </div>
          <div class="w3-card-2 w3-white" style={{marginBottom: "8px"}}>
            <div class="w3-container w3-cell-row w3-win8-steel">
              <h5 class="w3-cell w3-cell-middle">Post 3 title</h5>
              <div class="w3-cell w3-cell-middle w3-right">
                u d
              </div>
            </div>
            <div class="w3-container">Post 3 short view</div>
          </div>
          <div class="w3-card-2 w3-white" style={{marginBottom: "8px"}}>
            <div class="w3-container w3-cell-row w3-win8-steel">
              <h5 class="w3-cell w3-cell-middle">Post 4 title</h5>
              <div class="w3-cell w3-cell-middle w3-right">
                u d
              </div>
            </div>
            <div class="w3-container">Post 4 short view</div>
          </div>
          <div class="w3-card-2 w3-white" style={{marginBottom: "8px"}}>
            <div class="w3-container w3-cell-row w3-win8-steel">
              <h5 class="w3-cell w3-cell-middle">Post 5 title</h5>
              <div class="w3-cell w3-cell-middle w3-right">
                u d
              </div>
            </div>
            <div class="w3-container">Post 5 short view</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
