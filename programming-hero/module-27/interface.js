
// interface area

//buttons
document.getElementById('btn-addMoney').addEventListener('click', function(){
    document.getElementById('form-addMoney').style.display = 'block';
    document.getElementById('form-cashout').style.display = 'none';
})

document.getElementById('btn-cashOut').addEventListener('click', function(){
    document.getElementById('form-addMoney').style.display = 'none';
    document.getElementById('form-cashout').style.display = 'block';
})

//another way
// document.getElementById('btn-addMoney').addEventListener('click', function(){
//     document.getElementById('form-addMoney').classList.remove('hidden');
//     document.getElementById('form-cashout').classList.add('hidden')
// })

// document.getElementById('btn-cashOut').addEventListener('click', function(){
//     document.getElementById('form-addMoney').classList.add('hidden');
//     document.getElementById('form-cashout').classList.remove('hidden');
// })



//add money
document.getElementById('add-button').addEventListener('click', function(e){
    e.preventDefault();

    let currentBalance = document.getElementById('current-balance').innerText;
    const amount = document.getElementById('amount').value;
    const pin = document.getElementById('pin').value;

    if(pin === '1234'){
        const newBalance = parseInt(currentBalance) + Number(amount);
        document.getElementById('current-balance').innerText = newBalance;
        // এখানে currentBalance ভেরিয়েবল দিলে innerText যোগ হয় না অর্থাৎ মান সেট হয় কেন?
    }
    else{
        alert('Faild to add money, Try again')
    }

})


//Cash Out
document.getElementById('cashout-button').addEventListener('click', function(e){
    e.preventDefault();

    let currentBalance = document.getElementById('current-balance').innerText;
    const amount = document.getElementById('amount').value;
    const pin = document.getElementById('pin').value;

    if(pin === '1234'){
        const newBalance = parseInt(currentBalance) - Number(amount);
        document.getElementById('current-balance').innerText = newBalance;
    }
    else{
        alert('Faild to add money, Try again')
    }

})