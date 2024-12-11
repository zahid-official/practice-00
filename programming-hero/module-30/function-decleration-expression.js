// Function Decleration 
function total(a, b){
    return a + b;
}


// Function Expression
const total2 = function(a, b){
    return a + b;
}





//arrow function
const total3 = (a, b) => a + b;
console.log(total3(4, 5));



const person = {
    name: 'rafi',
    age: 25,
}

const age = (man) => man.age;
console.log(age(person));


const number = num => num[2];
console.log(number([2, 4, 13, 6, 7, 1]));



const getPI = () => Math.PI;
console.log(getPI());


// Multi line arrow function
const functionName = (x, y, z) => {
    const sum = x + y + z;
    const multi = x * y * z;
    return sum + multi;
};