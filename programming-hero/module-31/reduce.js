const numbers = [10, 20, 30];
const sum = numbers.reduce(
    function(accumulator, currentValue){
        return accumulator + currentValue;
    }, 0);
console.log(sum);