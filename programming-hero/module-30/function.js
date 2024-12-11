function sum (num1, num2){
    result = num1 + num2;
    console.log(num1, num2, result);
}
// sum();
// undefined undefined NaN
// sum(5);
// 5 undefined NaN
// sum(8, 3)
// 8 3 11




function age (num1, num2 = 0){
    result = num1 + num2;
    console.log(num1, num2, result);
}
age(5);