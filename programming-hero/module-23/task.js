// task-01                         Find the lowest number in the array below.
/* 
const heights = [167, 190, 120, 165, 137];

function lowest(numbers){
    let lowestNumber = numbers[0];
    for(const number of numbers){
        if (number < lowestNumber) {
            lowestNumber = number;
        }
    }
    return lowestNumber;
}
console.log(lowest(heights));
*/












// task-02                         Find the friend with the smallest name.
/* 
const name = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
function smallest(words){
    let smallestName = words[0];
    for(let word of words){
        if(word.length < smallestName.length){
            smallestName = word;
        }
    }
    return smallestName;
}
console.log(smallest(name));
 */









// task-03                         Your task is to calculate the total budget required to buy electronics:
/* 
function calculateElectronicsBudge(laptopQuantity, tabletQuantity, mobileQuantity){
    const perLaptop = 35000;
    const perTablet = 15000;
    const perMobile = 20000;

    let laptopPrice = perLaptop * laptopQuantity;
    let tabletPrice = perTablet * tabletQuantity;
    let mobilePrice = perMobile * mobileQuantity;
    total = laptopPrice + tabletPrice + mobilePrice;

    return total;
}
console.log(calculateElectronicsBudge(2, 5, 3));
 */













// task-04                         You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.
/* 
const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];


function findAveragePhonePrice(products){
    let avg = 0;
    for(const product of products){
        avg = avg + product.price
    }
    return avg / products.length;
}
console.log(findAveragePhonePrice(phones));
 */

















// task-05                         For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.
/* 
const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];


function company(employees){
    let totalSalary = 0;
    for(let employee of employees){
        let employeeSalary = employee.starting + (employee.experience * employee.increment);
        totalSalary = totalSalary + employeeSalary;
    }
    return totalSalary;
}
console.log(company(employees));
 */