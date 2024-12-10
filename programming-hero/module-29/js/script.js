// navbar
const mainBalance = getId('main-balance');
const donationButton = getId('donation-button');
const historyButton = getId('history-button');

// donation & history area
const donationArea = getId('donation-area');
const historyArea = getId('history-area');
const donationHistory = getId('donation-history');


// button: blog
getId('blog-button').addEventListener('click', function(){
    window.location.href = './pages/blog.html';
})

// button: donation
donationButton.addEventListener('click', function(){
    donationButton.style.backgroundColor = '#b4f461';
    historyButton.style.backgroundColor = '#e5e6e6';

    donationArea.classList.remove('hidden');
    historyArea.classList.add('hidden');
})

// button: history
historyButton.addEventListener('click', function(){
    historyButton.style.backgroundColor = '#b4f461';
    donationButton.style.backgroundColor = '#e5e6e6';

    donationArea.classList.add('hidden');
    historyArea.classList.remove('hidden');
})



// noakhali donation
getId('noakhali-button').addEventListener('click', function(){
    const noakhaliInput = getValue('noakhali-input');
    // validation
    if(isNaN(noakhaliInput) || noakhaliInput < 1) {
        return alert('Invalid Input');
    }
    else if(parseFloat(mainBalance.innerText) < noakhaliInput){
        return alert('Insufficient balance. Please add funds to continue.')
    }
    
    // count donation
    getId('noakhali-donation').innerText = getNumber('noakhali-donation') + noakhaliInput;
    getText('main-balance') = parseFloat(mainBalance.innerText) - noakhaliInput;

    // donation history
    donationHistory.innerHTML += 
    `<li class="space-y-3 border rounded-xl p-8 my-8 mx-4">
        <p class="text-xl font-semibold">${noakhaliInput} Taka is Donated for famine-2024 at Noakhali, Bangladesh</p>
        <p class="text-secondary">Date : ${new Date()}</p>
    </li>`;
    getId('noakhali-input').value = '';

    // modal
    my_modal_1.showModal();
})



// feni donation
getId('feni-button').addEventListener('click', function(){
    const feniInput = getValue('feni-input');
    // validation
    if(isNaN(feniInput) || feniInput < 1) {
        return alert('Invalid Input');
    }
    else if(parseFloat(mainBalance.innerText) < feniInput){
        return alert('Insufficient balance. Please add funds to continue.')
    }
    
    // count donation
    getId('feni-donation').innerText = getNumber('feni-donation') + feniInput;
    mainBalance.innerText = parseFloat(mainBalance.innerText) - feniInput;

    // donation history
    donationHistory.innerHTML += 
    `<li class="space-y-3 border rounded-xl p-8 my-8 mx-4">
        <p class="text-xl font-semibold">${feniInput} Taka is Donated for Flood Relief in Feni, Bangladesh</p>
        <p class="text-secondary">Date : ${new Date()}</p>
    </li>`;
    getId('feni-input').value = '';

    // modal
    my_modal_1.showModal();
})



// quota donation
getId('quota-button').addEventListener('click', function(){
    const quotaInput = getValue('quota-input');
    // validation
    if(isNaN(quotaInput) || quotaInput < 1) {
        return alert('Invalid Input');
    }
    else if(parseFloat(mainBalance.innerText) < quotaInput){
        return alert('Insufficient balance. Please add funds to continue.')
    }
    
    // count donation
    getId('quota-donation').innerText = getNumber('quota-donation') + quotaInput;
    mainBalance.innerText = parseFloat(mainBalance.innerText) - quotaInput;

    // donation history
    donationHistory.innerHTML += 
    `<li class="space-y-3 border rounded-xl p-8 my-8 mx-4">
        <p class="text-xl font-semibold">${quotaInput} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
        <p class="text-secondary">Date : ${new Date()}</p>
    </li>`;
    getId('quota-input').value = '';

    // modal
    my_modal_1.showModal();
})