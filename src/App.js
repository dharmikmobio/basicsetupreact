import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       data:0
    }
  }
  incress = () => {
    this.setState({data:this.state.data+1})
  }
  render() {
    return (
      <>
        <h1>{this.state.data}</h1>
        <button onClick={()=>this.incress()}>class based incress</button>
      </>
    )
  }
}

export default App