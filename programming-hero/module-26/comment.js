document.getElementById('post').addEventListener('click', function(){

    // 1. create element 
    let p = document.createElement('p');
    //2. set value to element
    p.innerText = document.getElementById('comment').value;
    //3. empty textarea
    document.getElementById('comment').value = '';
    // append element to container
    document.getElementById('container').appendChild(p);

})