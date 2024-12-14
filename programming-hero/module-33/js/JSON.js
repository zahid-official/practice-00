const user = {name: 'zahid', password: 1234};
const stringified = JSON.stringify(user);
// console.log(stringified);


const shop = {
    owner:'Rafi',
    address: {
        street: 'Sataish',
        city: 'Gaziput',
        division: 'Dhaka'
    },
    products: ['Laptop', 'Mobile', 'Tablet'],
    revenue: 45000,
    isNew: false,
    isOpen: true,
}

const shopString = JSON.stringify(shop);
console.log(shopString);
console.log(typeof shopString);

const shopObject = JSON.parse(shopString);
console.log(shopObject);
console.log(typeof shopObject);
