import React, { Component } from 'react'

class Menu extends Component {

  render() {
    console.log(this.props)
    return (
      <div class="w3-container w3-cell" style={{ width: "20%" }}>
        <div class="w3-bar-block w3-card-2 w3-light-gray">
          {this.props.title}
          <br />
          {
            this.props.listItems.map(item => (
              <button
                key={item}
                class="w3-bar-item w3-button"
                onClick={(event) => {
                  this.props.onSelectMenu(item)}}>
                  {item}
              </button>
            ))
          }
        </div>
      </div>
    )
  }
}

export default Menu;
