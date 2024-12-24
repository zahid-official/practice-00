export default function Product({arr}){
    const {name, quantity, price} = arr;
    return (
        <>
            <h2>Product Name is {name}, We need {quantity} piece, Per piece price is {price}</h2>
        </>
    )
}