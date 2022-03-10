import React from 'react'

function State() {
    const [data, setData] = React.useState(0)
    function changeData(){
        setData(data+1);
    }
    
 
  return (
    <>
        <h1>{data}</h1>
        <button onClick={changeData}>Click Here</button>
       
    </>
  )
}

export default State