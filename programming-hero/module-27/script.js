
// login area
document.getElementById('login-button').addEventListener('click', function(event){
    event.preventDefault();
    
    const number = document.getElementById('number').value;
    const pin = document.getElementById('pin').value;

    if(number === '01869' && pin === '1234'){
        console.log('You are logged in');
        window.location.href = '/interface.html';
    }
    else{
        alert('Wrong Number or Pin');
    }
})

