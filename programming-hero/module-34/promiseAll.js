
// promise
/* 
Promise.resolve(30)
.then(valueFromResolve => console.log("Approved: ",valueFromResolve))
.catch(errorFromReject => console.log('Rejected: ',errorFromReject))
 */


/* 
// another way
const myPromise = Promise.reject(30);
myPromise
.then(valueFromResolve => console.log("Approved: ",valueFromResolve))
.catch(errorFromReject => console.log('Rejected: ',errorFromReject)) */





/* 
// promise all
const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, {promise1: 50})
}) 
const promise2 = new Promise((resolve, reject) => {
    setTimeout(reject, 1000, {promise2: 90})
}) 

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, {promise3: 7})
}) 


Promise.all([promise1, promise2, promise3])
.then(valueFromResolve => console.log("Approved: ",valueFromResolve))
.catch(errorFromReject => console.log('Rejected: ',errorFromReject))

 */






// another way
/* const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, {promise1: 50})
}) 
const promise2 = new Promise((resolve, reject) => {
    setTimeout(reject, 1000, {promise2: 90})
}) 

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, {promise3: 7})
}) 


const promiseAll = Promise.all([promise1, promise2, promise3]);
promiseAll
.then(valueFromResolve => console.log("Approved: ",valueFromResolve))
.catch(errorFromReject => console.log('Rejected: ',errorFromReject)) */








// another way
const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, {promise1: 50})
}) 
const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, {promise2: 90})
}) 

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, {promise3: 7})
}) 


const testPromise = async() => {
    try{
        const promiseAll = await Promise.all([promise1, promise2, promise3]);
        console.log(`Rejected: `, promiseAll);
    }
    catch(error){
        console.log(`Rejected: `, error); // এখানে error কে যদি `Rejected: ${error}` এভাবে রাখা হয় তাহলে আউট এমন কেন আসে? Rejected: [object Object]
    }
}

testPromise()
