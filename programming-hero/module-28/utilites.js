function getValue(id){
    const inputValue = document.getElementById(id).value;
    const convertValue = parseFloat(inputValue);
    return convertValue;
}

function getText(id){
    const inputValue = document.getElementById(id).innerText;
    const convertValue = parseFloat(inputValue);
    return convertValue;
}


function showInterface(id){
    document.getElementById('form-addMoney').classList.add('hidden');
    document.getElementById('form-cashout').classList.add('hidden');
    document.getElementById('form-transactions').classList.add('hidden');
    
    document.getElementById(id).classList.remove('hidden');
}

// function checkNaN(value){
    
// }