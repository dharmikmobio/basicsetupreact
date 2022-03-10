import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
      data:0
       
    }
  }
  apple = () => {
    this.setState({data:this.state.data+1})
  } 
 
  render() {
    return (
     <>
       <h1>{this.state.data}</h1>
       <button onClick={()=> this.apple()}>click here</button>
     </>
    )
  }
}

export default App