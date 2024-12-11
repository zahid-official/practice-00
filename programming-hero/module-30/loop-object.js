const person = {
    name: "Ali",
    age: 25,
    city: "Dhaka",
    country: 'Bangladesh'
};

// for(const key in person){
//     console.log(key, person[key]);
// }

const properties = Object.keys(person)
for(const prop of properties){
    console.log(prop, person[prop]);
}