
// major difference

const number = 25;
// const number = 30;
// SyntaxError: Identifier 'number' has already been declared
// number = 30; 
// TypeError: Assignment to constant variable.


let age = 25;
// let age = 30;
// SyntaxError: Identifier 'age' has already been declared
age = 30;


var section = 3;
var section = 5;
section = 8;



// const in array & object 
const numbers = [2, 3, 4];
// numbers = [6, 7, 8];
// TypeError: Assignment to constant variable.
numbers.push(6, 7, 8);
numbers[0] = 12;


const bio = {
    name: 'Lily',
    age: 20,
}

// bio = {
//     name: 'Lotus',
//     age: 20,
// }
// TypeError: Assignment to constant variable.
bio.name = 'Lotus';




// const in loop

// for(const i = 0; i < 5; i++){
//     console.log(i);
// }
// TypeError: Assignment to constant variable.

for(let i = 0; i < 5; i++){
    const a = i; //এখানে প্রশ্ন হতে পারে i এর মান তো প্রতিবার পরিবর্তন হচ্ছে তাহলে error কেন দিচ্ছে না?
    let sum = 0;
    sum = sum + i;
}