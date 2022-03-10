import React from 'react'


function App() {
  
   function data(val){
        console.log(val.target.value)
    }
  return (
    <>
        <input type="text"onChange={data} />
    </>
  )
}

export default App