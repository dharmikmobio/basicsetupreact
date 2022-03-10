import React from 'react'

function App() {
    const [data, setData] = React.useState(true)
  return (
    <>
        <div>
            {
                data? <h1>hello World</h1> : false
            }
        </div>
        
        <button onClick={() =>setData(!data)}> Toggle </button>
        
    </>
  )
}

export default App