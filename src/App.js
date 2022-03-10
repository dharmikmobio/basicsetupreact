import React from 'react'

function App() {
    const [data, setData] = React.useState(true)
  return (
    <>
        <div>
            {data? <h1>hello World</h1> : null }
        </div>
        
        <button onClick={()=>setData(false)}>HIDE</button>
        <button onClick={()=>setData(true)}>SHOW</button>
    </>
  )
}

export default App