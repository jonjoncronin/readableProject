import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import ListPosts from "./components/ListPosts";
import PostListsControl from "./components/PostListsControl";
import PostInput from "./components/PostInput";
import PostDetail from "./components/PostDetail";
import PostEdit from "./components/PostEdit";

class App extends React.Component {
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
                  <PostListsControl />
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
                <PostDetail postID={match.params.postID} />
              </div>
            )}
          />

          <Route
            exact
            path="/:category/:postID/edit"
            render={({ history, match }) => (
              <div>
                <Header />
                <div className="w3-cell-row">
                  <PostEdit postID={match.params.postID} />
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
                  <PostListsControl />
                  <h4>{match.params.category} Posts</h4>
                </div>
                <div className="w3-cell-row">
                  <ListPosts category={match.params.category} />
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
