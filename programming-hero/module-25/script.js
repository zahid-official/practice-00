/* console.log('from external js file');

//all tags
const tagCollection = document.getElementsByTagName('p');
console.log(Array.isArray(tagCollection));

for(const tag of tagCollection){
    console.log(tag);
    console.log(tag.innerText);
}


//id & class
let idCatch = document.getElementById('ipsum-content');
idCatch.innerText = 'This is change text';
console.log(idCatch);

let classCatch = document.getElementsByClassName('text');
for(const classElement of classCatch){
    console.log(classElement.innerText);
} */

/* 
//querySelector
const idSelector = document.querySelector('#ipsum-content').innerText;
console.log(idSelector);

const classSelector = document.querySelectorAll('.selector p');
console.log(classSelector, 'Array like object');

for(let selectorC of classSelector){
    console.log(selectorC.innerText, '$$ element extract from array');
} */