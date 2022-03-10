import React,{useState} from 'react'

function Header() {
    const [data, setData] = useState(0)
    function updateData(){
        setData(data+1)
    }
  return (
    <>
        <h1>{data}</h1>
        <button onClick={updateData}>UpdateDATA</button>
    </>
  )
}

export default Header