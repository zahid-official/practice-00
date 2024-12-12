// task: 01                you have an odd array Now convert this array into an even array. Do this using for loop and array.map() method. 
const odd = [1, 3, 5, 7, 9]

// for loop
let even = [];
for (let num of odd){
    if(num % 2 === 1){
        even.push(num + 1);
    }
}
// console.log(even);


// array.map()
const getEven = odd.map(n => (n + 1));
// console.log(getEven);






// task: 02                you are given an array.now return/get all the elements which are divisible by 10 using array.filter() method. now do the same task using array.find() method.
const num = [33, 50, 79, 78, 90, 101, 30];

// array.filter()
const filterNumber = num.filter(n => n % 10 === 0);
// console.log(filterNumber);

// array.find()
const findrNumber = num.find(n => n % 10 === 0);
// console.log(findrNumber);






// task: 03                you have an array of objects. your task is to display the instuctor names that has the position senior using filter.
const instructor = [
    {name: 'Nodi', age: 28, position: 'Senior'},
    {name: 'Akil', age: 26, position: 'Junior'},
    {name: 'Shobuj', age: 30, position: 'Senior'},
]

const getSenior = instructor.filter(n => n.position === 'Senior');
// console.log(getSenior);








// task: 04                follow array of objects. so you have 3 objects as array element. can you find out the total sum from here? do it with for loop and do the same task using array.reduce() mehtod.
const people = [
    {name: 'Meena', age: 20},
    {name: 'Rina', age: 15},
    {name: 'Suchorita', age: 22},
]

const total = people.reduce((accumulator, currentValue) => accumulator + currentValue.age, 0);
console.log(total);