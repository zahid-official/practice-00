import { useEffect, useState } from "react";
import Cats from "./Cats/Cats";
import "./Body.css";
import { addToCart, getStorage, removeFromCart } from "../LocalStroage";
import Cart from "./Cart/Cart";

const Body = () => {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    fetch("Cats.json")
      .then((res) => res.json())
      .then((data) => setCats(data));
  }, []);

  //add to cart
  const [cart, setCart] = useState([]);
  const handleCart = (info) => {
    const newCart = [...cart, info];
    setCart(newCart);

    // local Storage
    addToCart(info.id);
  };

   // Display local Storage
  useEffect(() => {
    if (cats.length) {
      const storageLocal = getStorage();
      const storeCart = [];

      storageLocal.map(storageData => {
        const storageCartItem = cats.find(item => item.id === storageData);
        if(storageCartItem){
            storeCart.push(storageCartItem);
        }
      })
      setCart(storeCart);
    }
  }, [cats]);


  //remove from cart
  const handleRemove = (id)=>{
    // remove from localStorage

    removeFromCart(id);
    // remove from UI
    const remain = cart.filter(item => item.id !== id);
    setCart(remain);
  }



  return (
    <div>
      <Cart cart={cart} handleRemove={handleRemove}></Cart>

      <div className="container">
        {cats.map((data) => (
          <Cats key={data.id} cat={data} handleCart={handleCart}></Cats>
        ))}
      </div>
    </div>
  );
};

export default Body;
