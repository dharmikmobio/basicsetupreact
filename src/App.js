
import React,{useState} from 'react'

function App() {
  const [name, setName] = useState("");
  const [select, setSelect] = useState("");
  const [check, setCheck] = useState(false);
  function submitted(e){
    console.warn(name,select,check);
    e.preventDefault()
  }
  return (
    <>
      <form onSubmit={submitted}>
          <input type="text" placeholder='enter your name' onChange={(e)=>setName(e.target.value)} /><br/>
          <select onChange={(e)=>setSelect(e.target.value)}><br/>
            <option value="">select here</option><br/>
            <option value="">100</option><br/>
            <option value="">200</option><br/>
            <option value="">300</option><br/>
          </select><br/>
          <input type="checkbox" onChange={(e)=>setCheck(e.target.checked)} /><br/>
          <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default App