
const clickBtn = ()=>{
    const productField = document.getElementById('product');
    const quantityField = document.getElementById('quantity');
    const product = productField.value;
    const quantity = quantityField.value;
    productField.value = '';
    quantityField.value = '';

    // function calls
    productList(product, quantity);
    addLocalData(product, quantity)
}

const productList = (product, quantity)=>{
    const container = document.getElementById('container');
    container.innerHTML +=`<p>${product} ${quantity}</p>`;
}


const addCart = ()=>{
    let cart = {};
    const storageData = localStorage.getItem('cart');
    if(storageData){
        cart = JSON.parse(storageData);
    }
    return cart;
}

const addLocalData = (product, quantity)=>{
    const cart = addCart();
    cart[product] = quantity;
    const convertCart  = JSON.stringify(cart);
    localStorage.setItem('cart', convertCart);
}

const displayLocalData = ()=>{
    const display = addCart();
    for(const product in display){
        const quantity = display[product];
        productList(product, quantity);
    }
}
displayLocalData()
