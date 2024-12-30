import "./Cart.css";
const Cart = ({ cart, handleRemove }) => {
  return (
    <div>
      <h2>Cart: {cart.length}</h2>
      <div className="cart-container">
        {cart.map((item) => (
          <div key={item.id}>
            <div><img src={item.img}></img></div>
            <button onClick={()=> handleRemove(item.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
