/* 
// promise
const dataLoader = () => {
    return new Promise((resolve, reject) => {
        const success = Math.random();
        if(success <= 0.5){
            resolve(success)
        }
        else(
            reject(success)
        )
    })
}

dataLoader()
.then(data => console.log("Promise resolved because the number is: " , data))
.catch(data => console.error("Promise rejected because the number is: " , data))
 */




/* 
// async 
async function user(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    console.log(data);
}
user();


// async arrow function 
const test = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    console.log(data);
}
test()
 */




// setInterval and clearInterval
let number = 0;
const increaseNumber  = setInterval(() => {
    number++;
    console.log('Increased Number is: ', number);

    if(number === 5){
        clearInterval(increaseNumber);
        console.log('Number stopped increasing');
    }
},1000);






// setTimeout
console.log(1);
console.log(2);
console.log(3);

const lazyCall = setTimeout(() => console.log('I am Lazy'), 100);

console.log(4);
console.log(5);
console.log(6);
