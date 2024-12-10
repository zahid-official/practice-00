function button(id1, id2, area1, area2){
    document.getElementById(id1).style.backgroundColor = '#b4f461';
    document.getElementById(id2).style.backgroundColor = '#e5e6e6';

    document.getElementById(area1).classList.remove('hidden');
    document.getElementById(area2).classList.add('hidden');
}

function help(button, input, balance, donation, history, historyText){
    document.getElementById(button).addEventListener('click', function(){
        const inputValue = document.getElementById(input).value;
    
        // validation
        if(isNaN(parseFloat(inputValue)) || parseFloat(inputValue) < 1) {
            return alert('Invalid Input');
        }
        else if(parseFloat(document.getElementById(balance).innerText) < parseFloat(inputValue)){
            return alert('Insufficient balance. Please add funds to continue.')
        }
    
    
        // count donation
        document.getElementById(donation).innerText = parseFloat(document.getElementById(donation).innerText) + parseFloat(inputValue);
    
        document.getElementById(balance).innerText = parseFloat(document.getElementById(balance).innerText) - inputValue;
    
    
        // donation history
        document.getElementById(history).innerHTML += 
        `<li class="space-y-3 border rounded-xl p-8 my-8 mx-4">
            <p class="text-xl font-semibold">${inputValue} ${historyText}</p>
            <p class="text-secondary">Date : ${new Date()}</p>
        </li>`;
        document.getElementById(input).value = '';
        // modal
        my_modal_1.showModal();
    })
    
}