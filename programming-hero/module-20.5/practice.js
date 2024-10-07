// task-01               Write a JavaScript code to reverse the array colors without using the reverse method.
/* 
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
let reverse = [];
let i = 0;
while(i < colors.length){
    reverse.unshift(colors[i]);
    i++;
}
console.log(reverse);

// another way
let anotherReverse = [];
let a = colors.length -1;
while(a >= 0 ){
    anotherReverse.push(colors[a]);
    a--;
}
console.log(anotherReverse);
 */












// task-02                   Write a JavaScript code to get the even numbers from an array using any looping technique.
/* 
const numbers = [12, 98, 5, 41, 23, 78, 46];
let getEven = [];

for( i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){
    getEven.push(numbers[i])
    }
}
console.log(getEven);
 */










// task-03                   Use a for...of loop to concatenate all the elements of an array into a single string.
/* 
let numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
let conCat = [];

for(i = 0; i < numbers.length; i++){
    conCat.push(numbers[i]);
}
console.log(conCat.join(''));
 */










// task-04                   Reverse the words of a sentence. Only the position of the word will be reversed. check out the output
/* 
let statement = 'I am a hard working person';
statement = statement.split(' ');
let reverseStatement = [];

for(i = 0; i < statement.length; i++){
    reverseStatement.unshift(statement[i]);
}
console.log(reverseStatement.join(' '));
 */