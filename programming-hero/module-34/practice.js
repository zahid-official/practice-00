// task: 01                 write a function that displays a message after 5s
const lazy = () =>  setTimeout(()=> console.log('lazy boy'), 5000);
// lazy()



// task: 02                 write a function called delayGreeting() that takes two parameters (name, delay time) and logs a greeting message after the given delay time.
const delayGreeting = (a, b) => {
    setTimeout(() => console.log(`Hello, ${a}!`), b)
}
// delayGreeting('Aziz', 2000)






// task: 03                 the function tellJoke() below logs a fnny message every 2 seconds and after 10 seconds it stops. Complete the code below and see the output

/* 
function tellJoke(){
    console.log(`Why don't scientists trust atoms? Because they make up everything!`);
}
let count = 0;
const jokeInterval = setInterval(()=> {  //এখানে setInterval এর ভিতরে arrow এর প্যারামিটারে tellJoke কে যদি আর্গুমেন্ট হিসেবে পাস করা হয় তাহলে tellJoke ফাংশন নয় এমন কেন আসে?
    count++;
    tellJoke();
    if(count === 5){
        clearInterval(jokeInterval);
    }
},2000)

 */







// task: 04                 write an async/await function that fetch data from an api and logs a message

const tellJoke = async() => {
    const response = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single');
    const data = await response.json();
    console.log(data.joke);
}
tellJoke()


