// const runApi = () =>{
//     fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('error happed',error))
// }



const runApi = async() =>{
    const response = await fetch ('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    console.log(data);
}