import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0); 
    function handleAdd (){
        const newCount = count + 1;
        setCount(newCount);
    }

    const handleRemove = ()=>{
        setCount( count - 1);
    }

    return(
        <div style={{border: '1px solid lightblue',  padding: '40px', margin: '20px', width: '500px'}}>
            <h2>Count : {count}</h2>
            <button onClick={handleAdd} style={{marginRight: '10px'}}>Increase</button>
            <button onClick={handleRemove}>Decrease</button>
        </div>
    )
}