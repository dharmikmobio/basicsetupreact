import React, { Component } from 'react';

export class App extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
       hello:"hello world"
    }
   
  }
  apple = () =>{
      this.setState({hello:"hello india"})
    }
  render(){
    return(
      <>
            <h1>{this.state.hello}</h1>
            <button onClick={()=>this.apple()}>Click to change class based</button>
      </>
    );
  }
}

export default App;
