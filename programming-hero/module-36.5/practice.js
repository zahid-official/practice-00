const clickButton = ()=>{
    const productInput = document.getElementById('product');
    const quantityInput = document.getElementById('quantity');
    const product = productInput.value;
    const quantity = quantityInput.value;
    productInput.value = '';
    quantityInput.value = '';

    displayValue(product, quantity);
    setData(product, quantity)
}

const displayValue = (product, quantity)=>{
    const container = document.getElementById('item-container');
    container.innerHTML +=`<li class="text-lg font-semibold my-5">${product} ${quantity}</li>`
}


const checkLocalStorage = ()=>{
    let  cart  = {};
    const data = localStorage.getItem('cart');
    if(data){
        cart = JSON.parse(data);
    }
    return cart;
}


const setData = (product, quantity)=>{
    const obj = checkLocalStorage();
    obj[product] = quantity;
    localStorage.setItem('cart', JSON.stringify(obj));
}


const displayData = ()=>{
    const getData = checkLocalStorage();
    for(const item in getData){
        displayValue(item, getData[item]);
    }
}
displayData()