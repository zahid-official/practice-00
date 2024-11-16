// append element 

// main container 
const mainContainer = document.getElementById('main-container');

// create and append 
const createSection = document.createElement('section');
mainContainer.appendChild(createSection);
const h1 = document.createElement('h1');
h1.innerText = 'Heading of append js';
createSection.appendChild(h1);

const ul = document.createElement('ul');
createSection.appendChild(ul);

const li = document.createElement('li');
li.innerText = 'text 1'

const li2 = document.createElement('li');
li2.innerText = 'text 2'

const li3 = document.createElement('li');
li3.innerText = 'text 3'

ul.append(li, li2, li3)


//set directly
const setElements = document.createElement('section');
setElements.innerHTML = `
<h1>set heading by innerHtml </h1>
<ul>
<li>product 1</li>
<li>product 2</li>
<li>product 3</li>
<li>product 4</li>
</ul> `;

mainContainer.appendChild(setElements);
