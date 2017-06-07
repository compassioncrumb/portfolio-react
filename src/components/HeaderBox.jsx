import React, { Component } from 'react'

class HeaderBox extends Component {
  render() {
    return (
      <div className="HeaderBox">
        <h1>{this.props.name}</h1>
      </div>
    )
  }
}
export default HeaderBox;
