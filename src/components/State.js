import React from 'react'

function State() {
    const [data, setData] = React.useState("Dharmik")
    function changeData(){
        setData("Patel");
    }
  return (
    <>
        <h1>{data}</h1>
        <button onClick={changeData}>Click Here</button>
    </>
  )
}

export default State