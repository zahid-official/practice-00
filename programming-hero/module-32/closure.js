function parent(){
    let element = 0;
    return function(){
        element++;
        return element;
    }
}
const test1 = parent();
const test2 = parent();

console.log(test1());
console.log(test1());
console.log(test1());
console.log(test2());
console.log(test1());
console.log(test1());
console.log(test2());