// truthy:
// const a = true;
// const a = -5;
// const a = 'hi';


//falsy
// const a = false;
// const a = 0;
// const a = '';
// const a = undefined;
// const a = null ;


// if(a){
//     console.log('value is truthy');
// }
// else{
//     console.log('value is falsy');
// }




// check truthy
const x = [];
if(!!x){
    console.log('truthy value');
}

// check falsy
const y = '';
if(!y){
    console.log('falsy value');
}

