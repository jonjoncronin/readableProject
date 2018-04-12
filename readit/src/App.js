import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import * as PostsAPI from "./utils/PostsAPI";
// import Menu from './components/Menu';
import ListPosts from "./components/ListPosts";
import PostsControl from "./components/PostsControl";

class App extends React.Component {
  state = {
    myCategories: [],
    myPosts: []
  };

  componentWillMount() {
    // PostsAPI.editPost("6ni6ok3ym7mf1p33lnez", "My Post", "My body rocks!")
    // PostsAPI.editComment("8tu4bsun805n8un48ve89", "My comment body rocks!")
    // PostsAPI.voteOnPost("8xf0y6ziyjabvozdd253nd","downVote")
    // PostsAPI.voteOnComment("8tu4bsun805n8un48ve89","downVote")
    // PostsAPI.deleteComment("8tu4bsun805n8un48ve89")
    // PostsAPI.deletePost("8xf0y6ziyjabvozdd253nd")
  }

  componentDidMount() {
    // PostsAPI.getCommentsForPost("8xf0y6ziyjabvozdd253nd")
    // .then(comments => console.log(comments))
    // PostsAPI.getPost("8xf0y6ziyjabvozdd253nd")
    // .then(post => console.log(post))
    PostsAPI.getAllCategories()
      .then(categories => {
        // console.log(categories);
        this.setState({ myCategories: categories });
      })
      .then(() => {
        PostsAPI.getAllPosts().then(posts => {
          // console.log(posts);
          this.setState({ myPosts: posts });
        });
      });
    // .then(() => {
    //   PostsAPI.getPostsForCategory("redux")
    //   .then(posts => console.log(posts))
    // })
    // PostsAPI.getAllPosts()
    // .then(posts => console.log(posts))
    // PostsAPI.getAllPosts()
    // .then((posts) => {
    //   posts.forEach((post) => {
    //     PostsAPI.getCommentsForPost(post.id)
    //     .then((comments) => {
    //       console.log(post.title)
    //       console.log(comments)
    //     })
    //   })
    // })
    // PostsAPI.getComment("8tu4bsun805n8un48ve89")
    // .then(comment => console.log(comment))
    // PostsAPI.getPost("8xf0y6ziyjabvozdd253nd")
    // .then(post => console.log(post))
  }

  selectMenu = value => {
    console.log(value);
  };

  render() {
    // console.log(this.state.myCategories);
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <div class="w3-cell-row w3-blue-gray w3-margin-bottom w3-margin-top w3-padding-large">
                <h3>Readit - a blantant rip off</h3>
              </div>

              <div class="w3-cell-row">
                <PostsControl
                  listItems={this.state.myCategories}
                  onSelectMenu={this.selectMenu}
                />
              </div>

              <div class="w3-cell-row">
                <ListPosts posts={this.state.myPosts} />
              </div>
            </div>
          )}
        />

        <Route
          path="/addPost"
          render={({ history }) => (
            <div>
              <div class="w3-cell-row w3-blue-gray w3-margin-bottom w3-margin-top w3-padding-large">
                <h3>Readit - a blantant rip off</h3>
              </div>

              <div class="w3-cell-row">
                Add post input here!!
              </div>
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
