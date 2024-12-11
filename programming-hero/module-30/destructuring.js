
//  Object Destructure
const person = {
    name: "Ali",
    // age: 25,
    city: "Dhaka"
}
const {city, name: nam, age = 30} = person;
// console.log(age);






// Nested Object Destructure
const user = {
    id: 1,
    info: {
        userName: "Sara",
        userAge: 30
    }
};
const { info: { userName, userAge } } = user;







// Array Destructure
const [e1, e2] = ["apple", "banana", "orange"];
// console.log(e1);


// Array Destructure in function
function multiply(a, b){
    return [a*2, b*5];
}
const [element1, element2] = multiply(9, 6);
console.log(element2);