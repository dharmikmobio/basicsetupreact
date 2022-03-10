import React, { Component } from 'react'
import Header from "./components/Header"

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      data:"Dharmik Patel"
    }
  }
  render() {
    return (
      <>
          <Header name={this.state.data}/>
          <button onClick={()=>this.setState({data:"Dharmik Vasoya"})}>Click to change</button>
      </>
    )
  }
}

export default App