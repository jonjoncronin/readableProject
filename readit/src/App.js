import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import sortBy from 'sort-by'
import Header from "./components/Header";
import ListPosts from "./components/ListPosts";
import PostListsControl from "./components/PostListsControl";
import PostInput from "./components/PostInput";
import PostDetail from "./components/PostDetail";
import PostEdit from "./components/PostEdit";

class App extends React.Component {

    // PostsAPI.editPost("6ni6ok3ym7mf1p33lnez", "My Post", "My body rocks!")
    //
    // PostsAPI.editComment("8tu4bsun805n8un48ve89", "My comment body rocks!")
    //
    // PostsAPI.voteOnComment("8tu4bsun805n8un48ve89","downVote")
    //
    // PostsAPI.deleteComment("8tu4bsun805n8un48ve89")
    //
    // PostsAPI.getCommentsForPost("8xf0y6ziyjabvozdd253nd")
    // .then(comments => console.log(comments))
    //
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
    //
    // PostsAPI.getComment("8tu4bsun805n8un48ve89")
    // .then(comment => console.log(comment))

  sortPosts = type => {
    let thePosts = this.state.myPosts;
    thePosts.sort(sortBy(type));
    this.setState({ myPosts: thePosts });
  }
    // console.log("App State: ", this.state);

  render() {
    return (
      <div className="app">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <div>
                <Header />
                <div className="w3-cell-row">
                  <PostListsControl
                    onSortPosts={this.sortPosts}
                  />
                  <h4>All Posts</h4>
                </div>
                <div className="w3-cell-row">
                  <ListPosts />
                </div>
              </div>
            )}
          />

          <Route
            exact
            path="/addPost"
            render={({ history }) => (
              <div>
                <Header />
                <div className="w3-cell-row">
                  <PostInput />
                </div>
              </div>
            )}
          />

          <Route
            exact
            path="/:category/:postID"
            render={({ history, match }) => (
              <div>
                <Header />
                <PostDetail
                  postID={match.params.postID}
                />
              </div>
            )}
          />

          <Route
            exact
            path="/:category/:postID/edit"
            render= {({ history,match }) => (
              <div>
                <Header />
                <div className="w3-cell-row">
                  <PostEdit
                    postID={match.params.postID}
                  />
                </div>
              </div>
            )}
          />

          <Route
            exact
            path="/:category"
            render={({ history, match }) => (
              <div>
                <Header />
                <div className="w3-cell-row">
                  <PostListsControl
                    onSelectMenu={this.selectMenu}
                    onSortPosts={this.sortPosts}
                  />
                  <h4>{match.params.category} Posts</h4>
                </div>
                <div className="w3-cell-row">
                  <ListPosts
                    category={match.params.category}
                  />
                </div>
              </div>
            )}
          />

        </Switch>
      </div>
    );
  }
}
export default App;
