import { useState } from "react";

const StateButton = ()=>{
    const [count , setCount] = useState(0)
    const handleClick = ()=>{
        setCount(count+1)
    }
    return(
        <button onClick={handleClick}>clicked {count} times</button>
    )
}

export default StateButton