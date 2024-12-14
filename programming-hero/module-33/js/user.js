function userData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => getUser(data));
}

function getUser(info){
    const ul = document.getElementById('user-mail');
    for(const data of info){
        ul.innerHTML += `<li>${data.name}</li>`
    }
}