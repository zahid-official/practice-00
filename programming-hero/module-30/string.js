const a = 5;
const b = 7;
console.log('The Result of ' + a + ' and ' + b + ' is' + ' = ' + (a+b));

// template literals
console.log(
    `The Result of ${a} and ${b} is = ${a+b}`
);



const text = 'I want to write \n' +
'Multi Line sentence \n'  +
'by single quotation';
console.log(text);

// template string
const message = `But I am writing now
Multi Line sentence 
by backtick `
console.log(message);