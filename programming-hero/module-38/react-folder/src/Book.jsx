import './StyleBooks.css';
export default function Book ({subjects}){
    const {subject, price} = subjects;
    return(
        <div className='styleBook'>
            <h3>Subject: {subject}</h3>
            <p>Price: {price}</p>
        </div>
    )
}