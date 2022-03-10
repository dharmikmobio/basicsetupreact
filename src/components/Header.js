import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <>
         <h1>Hello {this.props.name}</h1>
      </>
    )
  }
}

export default Header