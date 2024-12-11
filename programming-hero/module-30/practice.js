//task-01                   write an arrow function that will take 2 parameters, will multiply the parameters and will return the result.
const arrowFunction = (a, b) => a * b;
// console.log(arrowFunction(2, 15));







//task-02                   write the following sentence in three lines and print the result: I am a developer. I love to code. I love to eat biryani.
const backtick = 
`    I am a developer. 
    I love to code. 
    I love to eat biryani.`;
// console.log(backtick);







//task-03                   write an arrow function that will take 2 parameters: One parameter will come from you and the other parameter will be a default parameter. Add these two parameters and return the result.
const defaultParameter = (a, b = 5) => a + b;
// console.log(defaultParameter(8));









//task-04                   write an arrow function where it will do the follwowing: a) It will take an array where the array elements will be the name of your friends b) Check if the length of each element is even, push elements with even length to a new array, then return the result and print it.
const friends = ['rafi', 'tusher', 'sohag', 'walid', 'rifat', 'noman', 'waleed', 'shahadat'];
let store = [];

for(const friend of friends){
    if(friend.length % 2 === 0){
        store.push(`${friend} : ${friend.length}`);
    }
}
// console.log(store);











//task-05                   write an arrow function where it will do the following: x2   a) Square each array element  b) Calculate the sum of the squared elements  c) Return the average of the sum of the squared elements and print it.
const avg = (num) => {
    let sum = 0;
    for(const i of num){
        sum += i*i
    }
    return(sum / num.length);
}

const numbers = [2, 3, 4];
// console.log(avg(numbers));









//task-06                   write an arrow function where it will do the follwing: a) It will take two array inputs b) Combine the two arrays and assign them in a new array c) Find the maximum number from the new array and return the result. then print it.

const max = (a, b) => {
    newArr = [...a, ...b];
    return Math.max(...newArr)
}

const num1 = [2, 52, 64, 85, 14];
const num2 = [32, 92, 14, 95, 74];
// console.log(max(num1, num2));
