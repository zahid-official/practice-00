// task-01                         Write a function to convert temperature from Celsius to Fahrenheit.
/* 
function temperature(celsius){
    fahrenheit = (celsius * 9/5) + 32
    return fahrenheit;
}
console.log(temperature(41));
 */








// task-02                         You are given an array of numbers. Count how many times the a number is repeated in the array.

/* function count(numbers, find){
    let repeated = 0;
    for(const number of numbers){
        if(number === find){
            repeated++;
        }
    }
    return repeated
}
console.log(count([5, 6, 11, 12, 98, 5, 5, 23, 3, 13, 3] , 8 )); 
*/











// task-03                         Write a function to count the number of vowels in a string.
/* 
function vowels(word){
    word = word.split('');
    count = 0;
    for(let letter of word){
        letter = letter.toLowerCase()

        if((letter === 'a') || (letter === 'e')  || (letter === 'i') || (letter === 'o') || (letter === 'u')) {
            count++;
        }
    }
    return count
}
console.log(vowels('Education'));
 */











// task-04                         Write a function to find the longest word in a given string.
// function longWord(sentence){
//     sentence = sentence.split(' ');
//     let size = 0;
//     let longWord = '';
//     for(let word of sentence){
//         if(size < word.length){
//            size = word.length;
//            longWord = word;
//         }
//     }
//     return longWord;
// }
// console.log(longWord('Dhaka is the Capital of Bangladesh'));















// task-05                         Generate a random number between 10 to 20
/* let number = 10;
let random = Math.round(Math.random() * number) + number;

console.log(random);
 */