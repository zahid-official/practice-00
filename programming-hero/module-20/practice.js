                                // Object Task 

// task-01       Access the golden rod color value in output.
// const colors = {
//     red: "#ff0000",
//     green: "#00ff00",
//     blue: "#0000ff",
//     "golden rod": '#daa520'
// };

// console.log(colors['golden rod']);








// task-02       For this object below add a property named passenger capacity with value 5
// const car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020,
//     'passenger capacity' : 5,
// };

// console.log(car['passenger capacity']);









// task-03       Display the physics marks as output.
// const student = {
//     name: "Hamim Sakep",
//     id: 5421,
//     physics: {
//         subject: "HSC Physics",
//         author: "Shahjahan Tapan",
//         marks: 30
//     }
// }
// console.log(student.physics);








// task-04       Count the number of properties.
// let singer = {
//     name: 'Ariana Grande',
//     age: 21,
//     city: 'Gaibandha',
//     isStudent: true
// };

// console.log(Object.keys(singer).length);









// task-05       Loop through an object and print the key-value pairs with their types
// let myObject = {
//     name: 'John Doe',
//     age: 25,
//     city: 'Example City',
//     isStudent: true
//     };

//     for (let bioData in myObject){
//         console.log( 'key:', bioData, '|', 'type:', typeof myObject[bioData]);
//     }














//  task-01          Count how many times a string has the letter a
// const sentence = 'This is a sentence about string';
// const alphabet = 'a';
// const find = sentence.split(alphabet).length -1;
// console.log(find);






//  task-02          Count how many times a string has the letter a or A
// const sentence = 'This is a sentence Aabout string';
// const alphabet = 'a';
// const equal = sentence.toLowerCase();
// const find = equal.split(alphabet).length -1;
// console.log(find);








//  task-03          Check whether a string contains all the vowels a, e, i, o, u
const text = 'A quick brown fox jumps over a lazy dog';
const equalLetters = text.toLowerCase();

if(equalLetters.includes('a') && equalLetters.includes('e') && equalLetters.includes('i') && equalLetters.includes('o') && equalLetters.includes('u')){
    console.log('contain all vowels');
}else{
    console.log('not contain');
}




// self task         check the text which vowels contains
// const text = 'A quick brown fox jumps over a lazy dog';
// const equalLetters = text.toLowerCase();
// const vowels = ['a', 'e', 'i', 'o', 'u', 5];

// menually
// text.includes(vowels[0])? console.log('this text contain: vowel A'): console.log('not contain');
// text.includes(vowels[1])? console.log('this text contain: vowel E'): console.log('not contain');
// text.includes(vowels[2])? console.log('this text contain: vowel I'): console.log('not contain');
// text.includes(vowels[3])? console.log('this text contain: vowel O'): console.log('not contain');
// text.includes(vowels[4])? console.log('this text contain: vowel U'): console.log('not contain');
// text.includes(vowels[5])? console.log('this text contain: vowel U'): console.log('not contain');



// looping
// const text = 'A quick brown fox jumps over a lazy dog';
// const lowerText = text.toLowerCase();
// const vowels = ['a', 'e', 'i', 'o', 'u', 5];

// for (const i of vowels) {
//     lowerText.includes(i)? console.log('contain :', i) : console.log('not contain');
// }