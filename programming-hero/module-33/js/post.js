function post(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(info => displayPost(info))
}


function displayPost(posts){
    const container = document.getElementById('container');
    for(const post of posts){
        container.innerHTML += `
        <div class="post">
            <h3>User: ${post.id}</h3>
            <h4>Title: ${post.title}</h4>
            <p>${post.body}</p>
        </div>
        `;
    }
}
post()

