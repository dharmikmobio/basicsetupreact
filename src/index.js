import React from 'react'
import ReactDOM from 'react-dom'
import App from "./App"
import Header from './components/Header';



ReactDOM.render(
  <>
    
   {
     Header.map((val) =>{
       return(
         <App
            key={val.id}
            imgscr={val.imgscr}
            title={val.title}
            sname={val.sname}
            linkopen={val.links}
         />
       )
     })
   }
  
   
  </>,document.getElementById("root")
);