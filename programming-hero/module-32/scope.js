function add(a, b){
    if(b > 5){
        const sum = 100 + a + b;
    }
    else{
        const sum = 10 + a + b;
        var current = sum;
    }
    return console.log(current);
}
add(5, 2)


// hoisting
for(var i = 0; i < 5; i++){
    console.log(i);
}
console.log(`loop increment doesnt fullfil the condion, so loop broke; 
but var store the increment value and give output'`, i);



// expression function hoisting
num();
var num = function(){
    console.log(`print 5`);
}