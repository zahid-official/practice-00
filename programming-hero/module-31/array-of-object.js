const products = [
    {model: 'Samsung Note 20', price: 130000},
    {model: 'Huawei Mate 40', price: 75000},
    {model: 'Iphone 16 Pro', price: 195000},
    {model: 'GT3 Neo', price: 62000}
];

const productName = products.map( i => i.model);
console.log(productName);

products.forEach( i => console.log(i.price));

const productFilter = products.filter(i => i.price < 100000);
console.log(productFilter);

const expensiveOne = products.find(i => i.price > 100000);
console.log(expensiveOne);


const totalPrice = products.reduce((accumulator, elementValue) => accumulator + elementValue.price , 0);
console.log(totalPrice);