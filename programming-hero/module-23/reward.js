// task-01
/* 
function calculateMoney(ticket) {
    if(ticket < 0){
        return 'Invalid Number';
    }
    else{
        const ticketPrice = 120;
        const expense = 500 + (50 * 8)
        let remained = (ticket * ticketPrice) - expense;
        return remained;
    }
}
console.log(calculateMoney(10));
 */



// another way by mentor 
/* 
function calculateMoney(ticket) {
    if(ticket < 0 || typeof ticket !== "number"){
        return 'Invalid Number';
    }
    return ( ticket * 120) - ( 500 + (8 * 50) );
}
console.log(calculateMoney("50"));
 */









// task-02
/* 
function checkName(name){
    if(typeof name !== 'string'){
        return 'Invalid'
    }
    name = name.toLowerCase();
    if(name.slice(-1) === 'a' || name.slice(-1) === 'y' || name.slice(-1) === 'i' || name.slice(-1) === 'e' || name.slice(-1) === 'o' || name.slice(-1) === 'u' || name.slice(-1) === 'u'){
        return 'Good Name';
    }
    else{
        return 'Bad Name';
    }
    
}
console.log(checkName(["Rashed"] ));
 */



// another way by mentor 
/* 
function checkName(name){
    if(typeof name !== 'string'){
        return 'Invalid'
    }

    let lastLetter = name.slice(-1).toLowerCase();
    let result = false;
    let checkArray = ['a', 'y', 'i', 'o', 'u', 'w', 'e'];

    for(let letter of checkArray){
        if(letter === lastLetter){
            result = true;
        }
    }

    return result ? 'Good Name' : 'Bad Name';
}
console.log(checkName('RAFEE'));
 */




// another approach by mentor 
/* 
function checkName(name){
    if(typeof name !== 'string'){
        return 'Invalid'
    }

    let lastLetter = name.slice(-1).toLowerCase();
    let checkArray = ['a', 'y', 'i', 'o', 'u', 'w', 'e'];
    let result = checkArray.includes(lastLetter)

    return result ? 'Good Name' : 'Bad Name';
}
console.log(checkName('RAFEEq'));
 */










// task-03
/* 
function deleteInvalids(array){
    if( !Array.isArray(array) ){
        return 'invalid array';
    }
    let store = [];
    for(let element of array){
        if(typeof element === "number" && isNaN(element) === false){
            store.push(element);
        }
    }
    return store;
}
console.log(deleteInvalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]  ));
 */















// task-04
/* 
function password(obj) {
    if(obj.name === undefined || obj.birthYear === undefined || obj.siteName === undefined || obj.birthYear.toString().length !== 4){
        return 'invalid';
    }
    let site = obj.siteName[0].toUpperCase() + obj.siteName.slice(1);
    return site + '#' + obj.name + '@' + obj.birthYear;
}
console.log(password( { name: "kolimuddin" , birthYear: 1999 , siteName: "google" } ));.
 */















// task-05
// function monthlySavings(arr , livingCost) {
//     if(!Array.isArray(arr) || typeof livingCost !== 'number' || isNaN(livingCost)){
//         return 'invalid';
//     }
//     let tax = 0;
//     let income = 0;
//     for( let element of arr){
//         if(element >= 3000){
//             tax = (element * 20 / 100)
            
//         }
//         income = income + element - tax;
//     }

//     let remained = income - livingCost;
//     if(remained < 0){
//         return 'earn more';
//     }
//     return Math.floor(remained);
// }
// console.log(monthlySavings( 100, [ 900 , 2700 , 3400]));