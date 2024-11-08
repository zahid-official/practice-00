/* 
// use object as array
const name = ['akib', 'rakib', 'nokib'];
console.log(name[1]);

const friends = {
    '0' : 'akib',
    '1' : 'rakib',
    '2' : 'nokib',
}
console.log(friends[2]);



function add(num1, num2){
    console.log(num1,num2);
    console.log(arguments);
}
add(12, 2, 154, 19, 20, 45);

 */







/* 
// use for of loop in an object
const products = [
    {id: 1, name: 'samsung', price: 120000},
    {id: 2, name: 'huawei', price: 39000},
    {id: 3, name: 'iphone', price: 240000},
    {id: 4, name: 'realme', price: 12000},
    {id: 5, name: 'oneplus', price: 31000},
];

for(const product of products){
    console.log(product);
}

 */






// use for of loop in an object by function
const products = [
    {id: 1, name: 'samsung phone', price: 120000},
    {id: 2, name: 'huawei laptop', price: 39000},
    {id: 3, name: 'apple tab', price: 240000},
    {id: 4, name: 'realme phone', price: 12000},
    {id: 5, name: 'oneplus phone', price: 31000},
    {id: 6, name: 'asus laptop', price: 145000},
    {id: 7, name: 'xiomi tab', price: 44000},
    {id: 8, name: 'sony laptop', price: 311000},
    {id: 9, name: 'iPhone', price: 105000},
];

function findProduct (products, search){
    const found = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            found.push(product);
        }
    }
    return found;
}
console.log(findProduct(products, 'phone'));

