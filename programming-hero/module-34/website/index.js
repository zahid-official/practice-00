const input = document.getElementById('input');
const button = document.getElementById('button');
const error = document.getElementById('error');

button.addEventListener('click', function(){
    const value = input.value;
    try{
        if(isNaN(value)){
            throw new Error(`Invalid Input`)
        }
        if(value < 18){
            throw new Error(`Age ${value} is not eligible`)
        }
        else if(value > 40){
            throw new Error(`Age ${value} is not eligible`)
        }
        else{
            error.innerText = '';
        }
    }
    catch(errorMessage){
        error.innerText = `Error: ${errorMessage.message}`
    }
    
})