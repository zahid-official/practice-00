
                                            // (While Loop)
                                            
// while loop: 01    {"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.}
// let display = 1;
// while(display <= 60){
//     console.log("I will invest at least 6 hrs every single day for next 60 days!",display);
//     display++;
// }





// while loop: 02    {Find all the odd numbers from 61 to 100.}
// let odd = 61;
// while(odd < 100){
//     console.log(odd);
//     odd = odd+2;
// }






// while loop: 03    {Find all the even numbers from 78 to 98.}
// let even = 78;
// while(even < 98){
//     if(even % 2 === 0){
//         console.log(even);
//     }
//     even++;
// }






// while loop: 04    {Display sum of all the odd numbers from 81 to 131.}
// let sum = 81;
// total = 0;
// while(sum <= 131){
//     sum++;
//     if(sum % 2 === 0){
//         continue;
//     }
//     total = sum + total;
// }
// console.log(total);






// while loop: 05     {Display sum of all the even numbers from 206 to 311.}
// let evenSum = 206;
// totalSum = 0;
// while(evenSum < 311){
//     if(evenSum % 2 === 0){
//         totalSum = evenSum + totalSum;
//     }
//     evenSum++;
// }
// console.log(totalSum);





// while loop: 05     {As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5}
// let table = 1;
// while(table <= 50){
//     if(table % 5 === 0){
//         console.log(table);
//     }
//     table++;
// }






// while loop: 06     {Implement a countdown timer that counts down from 21 to 15.}
// let countDown = 21;
// while(countDown >= 15){
//     console.log(countDown);
//     countDown--;
// }







                                            // (Continue & break)
                                            
// continue: 01    {Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.}
// for(let printEven = 1; print <= 40; printEven++){
//     if(printEven % 2 === 1){
//         continue;
//     }
//     console.log(printEven);
// }






// continue: 02    {display odd number from 55 to 85 and skip the numbers divisible by 5.}
// for (let i = 55; i <= 85; i++){
//     if(i % 2 === 0 || i % 5 === 0){
//         continue;
//     }
//     console.log(i);
// }


// another hard way
// for (let i = 50; i <= 70; i++){
//     if(i %  2 === 0){
//         continue;
//     }
//     if(i % 2 === 1 && i % 5 === 0){
//         continue;
//     }
//     console.log(i);
// }

// another easy way 
// for (let i = 50; i <= 70; i++) {
//     if (i % 2 === 0){
//         continue;
//     }
//     if(i % 5 === 0){
//         continue;
//     }
//     console.log(i);
// }




// break: 01    {Write a loop 1 to 200. Use break to exit the loop once you find 100.}
// for(let d = 1; d <=200; d++){
//     if(d > 100){
//         break;
//     }
//     console.log(d);
    
// }





// break: 02    {(sum upto 100) Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100}

// let sumBreak = 1;
// let totalBreak = 0;
// while(sumBreak <= 200){
//     totalBreak = sumBreak + totalBreak;
//     if(totalBreak > 100){
//         break;
//     }
//     console.log(totalBreak);
//     sumBreak++;
// }






// break: 03    {(squre break) Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc}
// Loop through numbers 1 to 20

// for(let i = 1; i <= 100; i++){
//     if(i > 4){
//         break;
//     }
//     console.log(i)
// }












// remove square number from loop list
// for (let i = 1; i <= 20; i++) {
//     let isPerfectSquare = false;
//     for (let j = 1; j * j <= i; j++) {
//         // console.log(j,i);
        
//         if (j * j === i) {
//             isPerfectSquare = true;
//             break;
//         }
//     }
//     if (isPerfectSquare == false) console.log('ab',i);
// }


// for (let i = 1; i <= 20; i++) {
//     if (i === Math.sqrt(i) * Math.sqrt(i)) {
//         continue; // Skip the square numbers
//     }
//     console.log(i);
// }



// for (let i = 1; i <= 20; i++) {
//     let j = Math.sqrt(i);
//     if (Number.isInteger(j)) {
//         continue;
//     }
//     console.log(i);
// }
