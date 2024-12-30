const getStorage = ()=>{
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
       return JSON.parse(storedCart);
    }
    return [];
}


const addToCart = (id)=>{
    const cart = getStorage();
    cart.push(id);
    setStorage(cart);
}

const setStorage = (cart)=>{
    const stringified = JSON.stringify(cart);
    localStorage.setItem('cart', stringified);
    
}

const removeFromCart = (id)=>{
   const checkStorage = getStorage()
   const remain = checkStorage.filter(item => item !== id);
   setStorage(remain);
}
export {addToCart, getStorage, removeFromCart}

