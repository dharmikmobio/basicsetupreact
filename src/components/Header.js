import React from 'react'
function Header(){
    let data = "India";
    function Update(){
        data = "Ahmedabad";
        alert(data)
    }
    return(
        <>
           <p>Hello World from function component</p>
           <h1>Hello {data}</h1>
           <button onClick={Update}>click to change by function</button>
           <button onClick={()=>alert("direct function called")}>click to change by function</button>
        </>
    );
}
export default Header;