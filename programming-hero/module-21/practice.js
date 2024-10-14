// task-01                 Take four parameters. Multiply the four numbers and then return the result
/* 
function multiply(num1, num2, num3, num4){
    const result = num1 * num2 * num3 * num4;
    return result;
}
console.log(multiply(2, 5, 8, 10));
 */










// task-02                 Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
/* 
function checkNumber(number){
    if(number % 2 === 1){
       return number * 2;
    }
    else{
        return number / 2;
    }
}
console.log(checkNumber(9));
 */








// task-03                 Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
/* 
function make_avg(numbers){
    total = 0;
    for(let number of numbers){
        total = total + number;
    }
    avg = total / numbers.length;
    return avg;
}
console.log(make_avg( [4, 6, 22, 30, 13] ));

 */









// task-04                 Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
/* 
function count_zero(binary){
    binary = binary.split('0').length -1;
    return binary;
}

console.log(count_zero('10010010011010')); 
*/













// task-05                 Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

// function odd_even(numbers){
//     let result = [];
//     for(num of numbers){
//         let status = num % 2 === 0? num + ' is even' : num + ' is odd';
//         result.push(status);
//     }
//     result = result.join(' | ')
//     return result;
// }
// console.log(odd_even( [1, 2, 3, 4, 5, 6, 12, 15] ));


// another way 
function odd_even(numbers){
    let result = [];
    let status;
    for(num of numbers){
        if(num % 2 === 0){
            status = num + ' is even';
        }
        else{
            status = num + ' is odd';
        }
        result.push(status);
    }
    result = result.join(' | ')
    return result;
}
console.log(odd_even( [1, 2, 3, 4, 5, 6, 12, 15] ));