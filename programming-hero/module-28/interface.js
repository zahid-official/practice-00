
// interface area

//buttons
document.getElementById('btn-addMoney').addEventListener('click', function(){
    showInterface('form-addMoney');
})

document.getElementById('btn-cashout').addEventListener('click', function(){
    showInterface('form-cashout');
})

document.getElementById('btn-transactions').addEventListener('click', function(){
    showInterface('form-transactions');
})



//add money
document.getElementById('add-button').addEventListener('click', function(e){
    e.preventDefault();
    
    const balance = getText('current-balance');
    const amount = getValue('add-amount');
    const pin = getValue('add-pin');

    //validation
    if(isNaN(amount)){
        alert('Invalid Input');
        return;
        // এখানে কাকে return করা হচ্ছে? 
        // return না কেবল function এ ব্যবহার করা হয়? 
        //এই শর্তকে function এ রাখতে return হয় না কেন?
    }

    if(pin === 1234){
        const newBalance = balance + amount
        document.getElementById('current-balance').innerText = newBalance;

        //history
        let p = document.createElement('p');
        p.innerHTML = `Added: ${amount}, New Balance: ${newBalance}`;
        document.getElementById('form-transactions').appendChild(p);
    }
    else{
        alert('Faild to add money, Try Again')
    }
})

//cash out
document.getElementById('cashout-button').addEventListener('click', function(e){
    e.preventDefault();
    
    const balance = getText('current-balance');
    const amount = getValue('cashout-amount');
    const pin = getValue('cashout-pin');

    //validation
    if(amount > balance){
        alert('Not Enough Balance')
        return;
    }

    if(pin === 1234){
        const newBalance = balance - amount;
        document.getElementById('current-balance').innerText = newBalance;

        //history
        let p = document.createElement('p');
        p.innerHTML = `Cashout: ${amount}, New Balance: ${newBalance}`
        document.getElementById('form-transactions').appendChild(p);
    }
    else{
        alert('Faild to add money, Try Again')
    }
})