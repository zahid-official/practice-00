function mainFunction(a, b){
   a(b);
}
mainFunction(callbackFunction, `Zahid`);
mainFunction(callbackFunction, `Noman`);
mainFunction(greet, `Fahad`);



function callbackFunction(name){
    console.log('Hi,', name);
}


function greet(name){
    console.log('Good Morning,', name);
}


