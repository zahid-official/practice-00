
// button: blog
document.getElementById('blog-button').addEventListener('click', function(){
    window.location.href = './pages/blog.html';
})

// button: donation
document.getElementById('donation-button').addEventListener('click', function(){
    button('donation-button', 'history-button', 'donation-area', 'history-area');
})

// button: history
document.getElementById('history-button').addEventListener('click', function(){
    button('history-button', 'donation-button', 'history-area', 'donation-area');
})



// noakhali donation
help('noakhali-button', 'noakhali-input', 'main-balance', 'noakhali-donation', 'donation-history', ' Taka is Donated for famine-2024 at Noakhali, Bangladesh');

// feni donation
help('feni-button', 'feni-input', 'main-balance', 'feni-donation', 'donation-history', ' Taka is Donated for Flood Relief in Feni, Bangladesh');

// quota donation
help('quota-button', 'quota-input', 'main-balance', 'quota-donation', 'donation-history', '  Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh');