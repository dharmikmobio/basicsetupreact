import React from 'react'
import ReactDOM from 'react-dom'
 import Header from "./components/Header"
 import State from "./components/State"
 import App from "./App"

ReactDOM.render(
  <>
    <p>this is main index file</p> 
    <Header/> <br/>     
    <App/>
    <State/>
  </>,document.getElementById("root")
);