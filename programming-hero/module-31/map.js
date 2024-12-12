const age = [1, 2, 3, 4, 5];

// way: 1
// let multiply = [];
// for(const number of age){
//     multiply.push(number * 2)
// }
// console.log(multiply);

// way: 2
// function double (num){
//     return num * 2;
// }

// let store = [];
// for(const number of age){
//     store.push(double(number));
// }
// console.log(store);









// way: 3
// function double (num){
//         return num * 2;
// }
// console.log(age.map(double));


// shorthand of way: 3
// const num = function (n){
//     return n * 2;
// }
// console.log(age.map(num));



// shorthand by arrow function of way: 3
// const numDouble = (n) => n *2;
// console.log(age.map(numDouble));



// single line shorthand of way: 3
console.log(age.map(n => n *2));