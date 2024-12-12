// filter number based on condition
let numbers = [4, 6, 9, 10, 12, 15, 7, 20, 25];
let filteredNumbers = numbers.filter(num => num > 10);
// console.log(filteredNumbers);


// filter even numbers
const even = numbers.filter(n => n % 2 === 0);
console.log(even);


// filter odd string
const friends = ['rahim', 'karim', 'rabbil', 'hasinHydar', 'jhankarMahbub', 'rafi'];
const oddFriends = friends.filter(i => i.length % 2 === 1);
console.log(oddFriends);