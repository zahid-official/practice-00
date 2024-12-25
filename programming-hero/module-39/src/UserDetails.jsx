export default function UserDetails({details}){
    const {name, email} = details;
    return(
        <>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
        </>
    )
}