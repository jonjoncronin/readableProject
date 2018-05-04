import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import serializeForm from "form-serialize";
import { connect } from "react-redux";
import { handlePostAdd } from "../actions/post_actions";

class PostInput extends Component {
  state = {
    addSubmitted: false
  };

  handleSubmit = event => {
    event.preventDefault();
    const { handlePostAdd } = this.props;
    const userInputs = serializeForm(event.target, { hash: true });
    if (handlePostAdd) {
      handlePostAdd(userInputs);
      this.setState(() => ({
        addSubmitted: true
      }));
    }
  };

  render() {
    console.log("PostInput Props", this.props);
    const { categories } = this.props;

    if (this.state.addSubmitted === true) {
      return <Redirect to="/" />;
    }

    return (
      <div className="w3-card-4 w3-win8-mauve w3-padding">
        <div className="w3-container">
          <h2>Add new post ...</h2>
        </div>

        <form onSubmit={this.handleSubmit} className="w3-container w3-padding">
          <label>Title</label>
          <input
            name="title"
            className="w3-input"
            type="text"
            placeholder="Title for the post..."
          />

          <label>Author</label>
          <input
            name="author"
            className="w3-input"
            type="text"
            placeholder="Your name..."
          />

          <label>Category</label>
          <select name="category" className="w3-input" defaultValue="choose">
            <option key="choose" value="choose" disabled>
              Choose one...
            </option>

            {categories.map(item => (
              <option key={item.name} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>

          <label>Post</label>
          <textarea
            name="body"
            className="w3-input"
            placeholder="Write something..."
          />

          <button className="w3-button">Submit</button>
          <Link to="/" className="w3-button w3-right">
            Cancel
          </Link>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { categories: state.categories };
};

const mapDispatchToProps = dispatch => {
  return {
    handlePostAdd: userInputs => dispatch(handlePostAdd(userInputs))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostInput);
