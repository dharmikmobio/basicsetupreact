import React from 'react'

function App() {
    const [data,setData] = React.useState(null)

    function datainput(val){
        setData(val.target.value)
        console.log(val.target.value)
    }
  return (
    <>
        <h1>{data}</h1>
        <input type="text" onChange={datainput} />
    </>
  )
}

export default App