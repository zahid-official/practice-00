// write a function to give the sum of all elements in an array

// function sum(numbers){
//     let total = 0;
//     for(const number of numbers){
//         total = total + number;
//     }
//     return total;

// }
// console.log(sum( [2, 5, 6, 12, 4, 15, 21, 5, 2] ));







//create function that will return only the even numbers and return the sum of even numbers
// function getEven(number){
//     let sum = 0;
//     for(i = 1; i <= number; i++){
//         if( i % 2 === 0){
//             sum = sum + i;
//         }
//     }
//     return sum;

// }
// console.log(getEven(18));









// step-01: create function that will return only the even numbers 
// step-02: return the sum of even numbers
function evenNumbers(numbers){
    for(const number of numbers){
        if(number % 2 === 0){
            console.log(number);
        }
    }
}
evenNumbers( [1, 2, 3, 4, 5, 6, 7] )
