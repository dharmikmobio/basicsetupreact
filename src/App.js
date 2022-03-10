import React,{useState} from 'react'
import Header from './components/Header'

function App() {
  const [data, setData] = useState("Dharmik Vasoya")
  function update() {
    setData("Dharmik Patel")
  }
  return (
   <>
        <Header name={data}/>
        <button onClick={update}>Click to Change</button>

   </>
  )
}

export default App