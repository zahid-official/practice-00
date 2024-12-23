const name = localStorage.setItem('myName', 'I am Zahid');
const age = localStorage.setItem('age', 25);
const developer = localStorage.setItem('isDeveloper', true);


console.log(localStorage.getItem('myName'));
localStorage.removeItem('isDeveloper');
console.log(localStorage.length);