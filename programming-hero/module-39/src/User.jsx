import { useEffect, useState } from "react"
import UserDetails from "./UserDetails";

export default function User(){
    const [user, setUser] = useState([]);

    useEffect( ()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>  response.json())
        .then(data => setUser(data));
    }, [])

    const styleUser = {
        padding: '20px',
        margin: '40px',
        border: '1px solid lightgreen',
        borderRadius: '12px'
    }
    

    return(
        <div style={styleUser}>
            {user.map(details => <UserDetails details={details}></UserDetails>)}
        </div>
    )
}