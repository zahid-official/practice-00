function add(a, b, c){
    console.log(arguments);
    const convert = [...arguments]
    console.log(convert);
    return a+ b+ c;
}

// parameter number
console.log(add.length);

// pass arguments
console.log(add(5, 8, 2, 3 ,5 ,7));
