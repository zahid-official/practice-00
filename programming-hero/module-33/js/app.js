function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(user => displayUser(user))
}

function displayUser(data){
    console.log(data);
}