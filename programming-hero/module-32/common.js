// primitive 
let a = 5;
let b = a;
// console.log(a, b);

a = 7;
// console.log(a, b);


// non primitive 
let x = {job: 'developer'};
let y = x;
// console.log(y, x);

y = {job: 'Marketer'}
// console.log(x, y);

y.job = 'designer';
// console.log(x, y);