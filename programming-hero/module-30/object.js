const person = {
    name: "Ali",
    age: 25,
    city: "Dhaka",
    country: 'Bangladesh'
};

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));

// esay way
// delete person.country;
// console.log(person);

// difficult way
// const {country, ...others} = person;
// console.log(others);


// freeze
Object.freeze(person)
person.id = 1234;
person.age = 32;
console.log(person);

// seal
Object.seal(person)
person.id = 1234;
person.age = 32;
console.log(person);
