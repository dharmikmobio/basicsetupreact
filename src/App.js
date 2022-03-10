import React from 'react'

function App() {
    const [data, setData] = React.useState(null)
    const [print, setPrint] = React.useState(false)
   function inputData(val)  {
        console.log(val.target.value)
        setData(val.target.value)
    }
  return (
    <>
    <div>
        {print?<h1>{data}</h1> : false }
    </div>
        
        <input type="text" onChange={inputData} />
        <button onClick={()=>setPrint(true)}>Click to submit</button>
    </>
  )
}

export default App