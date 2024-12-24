// Number to String
const num = 50;
const converStr = num + '';
// console.log(typeof converStr);


// String to Number  
const num1 = '50';
const convertNum = +num1;
// console.log(typeof convertNum);


const isActive = true;

//normal ternary
// isActive ? console.log('Display Product') :  console.log('Hide Product');

//single truthy ternary
// isActive && console.log('Display Product');

//single falsy ternary
!isActive || console.log("Hide Product") 