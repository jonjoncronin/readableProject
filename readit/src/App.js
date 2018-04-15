import React from "react";
import "./App.css";
import uuidv1 from "uuid";
import { Route, Switch } from "react-router-dom";
import * as PostsAPI from "./utils/PostsAPI";
// import Menu from './components/Menu';
import Header from "./components/Header";
import ListPosts from "./components/ListPosts";
import PostsControl from "./components/PostsControl";
import PostInput from "./components/PostInput";
import PostDetail from "./components/PostDetail";
import PostEdit from "./components/PostEdit";

class App extends React.Component {
  state = {
    myCategories: [],
    myPosts: []
  };

  componentDidMount() {
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

    // PostsAPI.editPost("6ni6ok3ym7mf1p33lnez", "My Post", "My body rocks!")
    //
    // PostsAPI.editComment("8tu4bsun805n8un48ve89", "My comment body rocks!")
    //
    // PostsAPI.voteOnPost("8xf0y6ziyjabvozdd253nd","downVote")
    //
    // PostsAPI.voteOnComment("8tu4bsun805n8un48ve89","downVote")
    //
    // PostsAPI.deleteComment("8tu4bsun805n8un48ve89")
    //
    // PostsAPI.deletePost("8xf0y6ziyjabvozdd253nd")
    //
    // PostsAPI.getCommentsForPost("8xf0y6ziyjabvozdd253nd")
    // .then(comments => console.log(comments))
    //
    // PostsAPI.getPost("8xf0y6ziyjabvozdd253nd")
    // .then(post => console.log(post))

    // PostsAPI.getPostsForCategory("redux")
    // .then(posts => console.log(posts))
    //
    // PostsAPI.getAllPosts()
    // .then(posts => console.log(posts))
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
  }

  addUserPost = userInputs => {
    let { title, author, category, body } = userInputs;
    let id = uuidv1();
    let timestamp = Date.now();
    let newPost = { id, timestamp, title, body, author, category };
    console.log("newPost before sent to DB");
    console.log(newPost);
    PostsAPI.addPost(newPost).then(() => {
      console.log("post added to backend DB");
      PostsAPI.getAllPosts().then(posts => {
        this.setState({ myPosts: posts });
      });
    });
  };

  editUserPost = (userInputs, postID) => {
    let {title, author, category, body } = userInputs;
    console.log("editting post " + postID)
    console.log(title + " " + author + " " + category + " " + body);
    PostsAPI.editPost(postID, title, body)
    .then(() => {
      console.log("post edit made to backend DB");
      PostsAPI.getAllPosts().then(posts => {
        this.setState({ myPosts: posts });
      });
    });
  };

  voteOnPost = (postID, vote) => {
    PostsAPI.voteOnPost(postID, vote).then(() => {
      console.log("vote added to backend DB");
      PostsAPI.getAllPosts().then(posts => {
        this.setState({ myPosts: posts });
      });
    });
  };

  deletePost = postID => {
    PostsAPI.deletePost(postID).then(() => {
      console.log("post removed from backend DB");
      PostsAPI.getAllPosts().then(posts => {
        this.setState({ myPosts: posts });
      });
    });
  };

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
                  <PostsControl
                    listItems={this.state.myCategories}
                    onSelectMenu={this.selectMenu}
                  />
                </div>
                <div className="w3-cell-row">
                  <ListPosts
                    posts={this.state.myPosts}
                    handleVoteOnPost={this.voteOnPost}
                    handlePostDelete={this.deletePost}
                  />
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
                  <PostInput
                    onAddPost={post => {
                      this.addUserPost(post);
                      history.push("/");
                    }}
                    categories={this.state.myCategories}
                  />
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
                  post={this.state.myPosts.find(
                    post => post.id === match.params.postID
                  )}
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
                    post={this.state.myPosts.find(post => post.id === match.params.postID)}
                    onEditPost={(post,postID) => {
                      this.editUserPost(post, postID);
                      history.push("/");
                    }}
                    categories={this.state.myCategories}
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
                  <PostsControl
                    listItems={this.state.myCategories}
                    onSelectMenu={this.selectMenu}
                  />
                </div>
                <div className="w3-cell-row">
                  <ListPosts
                    posts={this.state.myPosts.filter(
                      post => post.category === match.params.category
                    )}
                    category={match.params.category}
                    handleVoteOnPost={this.voteOnPost}
                    handlePostDelete={this.deletePost}
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
