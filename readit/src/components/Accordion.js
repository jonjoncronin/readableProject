import React, { Component } from "react";

class Accordion extends Component {

  state = { expanded: false };

  handleButtonClick = () => {
    this.setState({expanded: !this.state.expanded});
  }

  render() {
    console.log("Accordion Props", this.props);
    const { title, content } = this.props;

    return (
      <div style={{marginBottom:'8px'}}>
        <div className="w3-button w3-block" onClick={() => this.handleButtonClick()}>
          {title}
        </div>
        <div className={this.state.expanded ? "w3-show": "w3-hide"}>
          {content}
        </div>
      </div>
    );
  }
}

export default Accordion;
