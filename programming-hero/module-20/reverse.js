// reverse string: 01
let word = 'Hello I am a Web Dev';
let reverse = '';
for(const letter of word){
    reverse = letter  + reverse;
}
console.log(reverse);


//reverse string: 02
let myName = 'fahad';
let rev = '';
for(i = 0; i < myName.length; i++){
    const alphabet = myName[i];
    rev = alphabet + rev;
}
console.log(rev);


//reverse string: 03
let school = 'uttara high school';
let revision = '';
for(i = 0; i < school.length; i++){
    revision = school.split('').reverse().join('');
}
console.log(revision); 