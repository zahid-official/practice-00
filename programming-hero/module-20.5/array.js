/*
 //convert for of into for loop
 let friends = ['Rahim', 'Karim', 'Fahim'];

// for of loop
for(let friend of friends){
    console.log(friend);
}

// for loop
for(let i = 0; i < friends.length; i++){
    console.log(friends[i]);
} 
*/







/*
 // reverse array
let numbers = [1,2,3,4,5,6,7];
console.log(numbers.reverse());
console.log(numbers); // real array changed

// reverse array by for of
let reverse = [];
for(number of numbers){
    reverse.unshift(number);
}
console.log(reverse);
console.log(numbers); // real array not changed

// reverse array by highest index
let reverseByIndex = [];
for(i = numbers.length -1; i >= 0; i--){
    let num = numbers[i];
    reverseByIndex.push(num);
}
console.log(reverseByIndex);
console.log(numbers); // real array not changed
 */







/* 
 //sort string
let member = ['Rakib', 'Akib', 'Dulal', 'billal', 'emon', 'ashiq', 'sakib', 'akash']
console.log(member.sort());

// sort number
let age = [2, 5, 1, 9, 3, 8, 4, 6, 7, 10, 22, 42];
console.log(age.sort());

// ascending 
console.log(age.sort(function(a, b){
    return a-b
}));

// descending 
console.log(age.sort(function(a, b){
    return b-a
}));

//coping array
let staff = ['D', 'A', 'C', 'e', 'g', 'b', 'aa', 'a', 'c', 'd', 'b', 'ac', 'dc'];
console.log([...staff].sort());
console.log(staff); 
*/