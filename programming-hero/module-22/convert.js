// convert feet & inch separately ( 1 feet = 12 inch )
// function inchToFeet(height){
//     let feetConvert = height / 12;
//     let feet = parseInt(feetConvert);
//     let inch = height % 12;
//     return feet + 'ft ' + inch + 'in';
// }
// console.log(inchToFeet(75));




// convert miles to kilometer ( 1 miles = 1.60934 kilo )
// function milesToKillo(miles){
//     let kilo = miles * 1.60934;
//     console.log(kilo);
// }
// milesToKillo(5)








//leap year
// function isLeapYear(year){
//     if((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)){
//         return 'leap';
//     }
//     else{
//         return 'not leap';
//     }
// }
// console.log(isLeapYear(1600));









// odd average 
// function oddAvg(odd){
//     let getOdd = []
//     let average = 0;
//     for(const number of odd){
//         if(number % 2 === 1){
//             getOdd.push(number);
//         }
//     }
//     for(number of getOdd){
//         average = average + number / getOdd.length;
//     }
//     console.log(average);
// }
// oddAvg( [1, 2, 3, 4, 5, 6, 7, 8, 9, 55] )











//remove duplicate
// function isDuplicate(numbers){
//     let noDuplicate = [];
//     for(let number of numbers){
//         if(noDuplicate.includes(number) === false){
//             noDuplicate.push(number)
//         }
//     }
//     return noDuplicate;
// }
// console.log(isDuplicate([1, 2, 2 , 3, 4, 5, 5, 6, 6, 7]));









// get a random intizer Number
// let lottery = 100;
// const randomNumber = Math.round(Math.random() * lottery);
// console.log(randomNumber);

