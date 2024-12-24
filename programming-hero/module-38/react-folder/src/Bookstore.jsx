import Book from "./Book"
export default function Bookstore ({bookArr}){
    return(
        <>
            {bookArr.map(boi => <Book subjects={boi}></Book>)}
        </>
    )
}