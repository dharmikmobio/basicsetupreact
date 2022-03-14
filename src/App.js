import React from 'react'
import  "./App.css";


function App(props) {
  return (
    <>
      <div className="cards">
<div className="card ">
<img src={props.imgscr} alt="myPic" className="card_img" />
<div className="card_info">
<span className="card_category">{props.title} </span>
<h3 className="card_title"> {props.sname} </h3>
<a href=" " target="_blank">
<button> Watch Now </button>
</a>
</div>
</div>
</div>
    </>
  )
} 

export default App