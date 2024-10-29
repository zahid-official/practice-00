
// Large number from Array
/* const age = [16, 22, 13, 19, 25, 33, 42, 12, 9, 48, 61, 78];

function senior(numbers){

    let older = numbers[0];

    for(let num of numbers){
        if(num > older){
            older = num;
        }
    }
    return older;
}
console.log(senior(age)); */















// shoping bill
/* function shoping(shirt, pant, shoe){
    perShirt = 820;
    perPant = 500;
    perShoe = 1390;

    shirtPrice = shirt * perShirt;
    pantPrice = pant * perPant;
    shoePrice = shoe * perShoe;

    totalBill = shirtPrice + pantPrice + shoePrice;

    return totalBill;
}
console.log(shoping(1, 3, 1)); */


















// compare array's object's propery

// let phone = [
//     {brand: 'Apple', price: 120000, camera: 12, battery: 3500, color: 'Silver'},
//     {brand: 'Samsung', price: 85000, camera: 10, battery: 6000, color: 'Black'},
//     {brand: 'Realme', price: 23000, camera: 16, battery: 4500, color: 'Black'},
//     {brand: 'Xiaomi', price: 28000, camera: 16, battery: 4300, color: 'Green'},
//     {brand: 'OnePlus', price: 54000, camera: 32, battery: 4500, color: 'White'},
//     {brand: 'Motorola', price: 36000, camera: 24, battery: 5000, color: 'Navy'}
// ]

// function lowPrice(mobile){
//     let buy = mobile[0];
//     for(let choice of mobile){
//         if(choice.price < buy.price){
//             buy = choice;
//         }
//     }
//     return buy;
// }
// console.log(lowPrice(phone));

















// sum of array's object's propery
/* const buy = [
    {name: 'Doi', price: 160},
    {name: 'Misti', price: 220},
    {name: 'Rosogolla', price: 280},
    {name: 'Shemai', price: 120},
    {name: 'Milk', price: 70},
    {name: 'Kismis', price: 50},
    {name: 'chini', price: 80}
]

function bazar(products){
    let total = 0;
    for(let product of products){
        total = total + product.price;
    }
    console.log(total);
}
console.log(bazar(buy)); */




// Sum according to quantity
/* const buy = [
    {name: 'Doi', price: 160, quantity: 2},
    {name: 'Misti', price: 220, quantity: 3},
    {name: 'Rosogolla', price: 280, quantity: 2},
    {name: 'Shemai', price: 120, quantity: 5},
    {name: 'Milk', price: 70, quantity: 4},
    {name: 'Kismis', price: 50, quantity: 1},
    {name: 'chini', price: 80, quantity: 7}
]

function bazar(products){
    let total = 0;
    for(let product of products){
        total = total + product.price * product.quantity;
    }
    console.log(total);
}
console.log(bazar(buy)); */















// layers of discount

/* 
function getDiscount(quantity){
    const upto100 = 100;
    const upto200 = 90;
    const above200 = 70;

    if(quantity <= 100){
        return quantity * upto100;
    }
    else if(quantity <= 200){
        const priceFor100 = 100 * upto100;
        const remainQuantity = quantity - 100;
        const priceAfter100 = remainQuantity * upto200; 
        return total = priceFor100 + priceAfter100;
    }
    else{
        const priceFor100 = 100 * upto100;
        const priceFor200 = 100 * upto200;
        const remainAfter200 = quantity - 200;
        const priceAfter200 = remainAfter200 * above200;
        return total = priceFor100 +  priceFor200 + priceAfter200;
    }
}
console.log(getDiscount(202)); */



// another way
/* function getDiscount(quantity){
    if(quantity <= 100){
        return quantity * 100;
    }
    else if(quantity <= 200){
        return (quantity - 100) * 90 + (100 * 100)
    }
    else{
        return (quantity - 200) * 70 + (100 * 90) + (100 * 100)
    }
}
console.log(getDiscount(204));
 */
















// basic calculator

function addition(num1, num2){
    sum = num1 + num2;
    return sum;
}


function subtraction(num1, num2){
    subtrac = num1 - num2;
    return subtrac;
}

function multiplication(num1, num2){
    multiply = num1 * num2;
    return multiply;
}


function division(num1, num2){
    devide = num1 / num2;
    return devide;
}


function calculator(a, b, operation){
    if (operation === "addition") {
        const result = addition(a, b);
        return result;
    }
    else if (operation === subtraction) {
        const result = subtraction(a, b);
        return result;
    }
    else if (operation === multiplication) {
        const result = multiplication(a, b);
        return result;
    }
    else if (operation === division) {
        const result = division(a, b);
        return result;
    }
    else{
        return 'Please select an operation';
    }
}
console.log(calculator(7, 3, "addition"));













