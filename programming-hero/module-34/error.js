function handle(a, b){
    try{
        if(b === 0){
            throw new Error('This error is coming from b parameter');
        }
        console.log(`All Ok, The Result is: ${a+b}`);
    }
    catch(errorMessage){
        console.error(errorMessage.message);
    }
}

handle(2,0)

