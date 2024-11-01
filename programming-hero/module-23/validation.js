// validate number 
function getNumbers(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'please provide a number'
    }
    else{
        return num1 + num2;
    }
}
console.log(getNumbers(5 , "seven"));







// validate string 
function getString(num1, num2){
    if(typeof num1 !== 'string' || typeof num2 !== 'string'){
        return 'please provide a string'
    }
    else{
        return num1 + ' ' + num2;
    }
}
console.log(getString('five' , "seven"));










// validate object 
/* function getObject(products){
    if(typeof products !== 'object' || Array.isArray(products) === true){
        return 'please provide a object'
    }
    else{
        return products.price;
    }
}
console.log(getObject({name: 'samsung' , price: 34000})); */












// validate array 
/* function getArray(age){
    if(Array.isArray(age) !== true){
        return 'please provide a array'
    }
    else{
        return age[2];
    }
}
console.log(getArray([11, 53, 25])); */