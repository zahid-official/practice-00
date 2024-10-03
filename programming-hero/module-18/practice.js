
// practice-01: billpay
var burger = 300;
var coke = 30;
var buy = burger;

if(buy == burger * 2){
    console.log('Pay Only 600tk for burgers and The Coke is free');
}
else{
    console.log('Pay 330tk, 300tk for burger and 30tk for coke');
}


//practice-02: BMI Calculator
var weight = 95;
var height = 165;
var height = height/100 * height/100;
var bmi = weight / height;
if(bmi < 30 ){
    if(bmi < 18.5){
        console.log('you are underweight.');
    }
    else if(bmi >= 18.5 && bmi <= 24.9){
        console.log('you are normal.');
    }
    else if(bmi >= 25 && bmi <= 29.9){
        console.log('you are overweight.');
    }
}
else{
    console.log('Obese');
}


// practice-03: ternary operator
var num1 = 40;
var num2 = 35;
var result;
num1 > num2 ? console.log( num1 * 2 ) : console.log( num1 + num2 );


// practice-04: complex  ternary
var age = 66;
var ticket= 800;
age > 10?
    // if block
        // 50% discount for students
        age <= 25? console.log(ticket - ticket * 50/100)
        // 20% discount for senior citizens
        :age >= 60? console.log(ticket - ticket * 20/100)
        :console.log(ticket)
    // else block
    : 
    console.log('Ticket free');
