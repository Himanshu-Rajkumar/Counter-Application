import { useState } from "react";

function Counter(){
    const [count,setCount]=useState(1);

    const HandelIncrement=()=>{
        setCount(count+1)
    }
    const HandelDecrement=()=>{
        setCount(count-1)
    }

    return (
       
        <div className="Counter" style={{color:"red" , border:"2px solid black" ,width:"30%",padding:"10px"}} >
        <h1>Counter Application</h1>
        <h2> Current Count :{count}</h2>
        <button onClick={HandelIncrement }>Increment</button>
        <button onClick={HandelDecrement}>Decrement</button>
        </div>
        
        
    )
}

export default Counter