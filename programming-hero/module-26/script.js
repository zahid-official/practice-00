function bgChange (){
    document.body.style.backgroundColor = '#2a9d8f';
}

// one way 
let jsOnclick = document.getElementById('js-onclick');
jsOnclick.onclick = backgroundChange;
function backgroundChange (){
    document.body.style.backgroundColor = '#fcbf49';
}

// another way 
// let jsOnclick = document.getElementById('js-onclick');
// jsOnclick.onclick = function backgroundChange (){
//     document.body.style.backgroundColor = '#fcbf49';
// };



// eventListener 

// let eventListener = document.getElementById('js-eventListener');
// eventListener.addEventListener('click', bgEventListener)

// function bgEventListener (){
//     document.body.style.backgroundColor = '#7b2cbf';
// }

document.getElementById('js-eventListener').addEventListener('click', function (){
    document.body.style.backgroundColor = '#7b2cbf';
});


// update text 
document.getElementById('text-changer').addEventListener('click', changeText);
function changeText(){
    document.getElementById('text').innerText = 'I am changed by callback function'
}

document.getElementById('update-text').addEventListener('click', function(){
    if(document.getElementById('input-text').value === ''){
        document.getElementById('Defalut-text').innerText = document.getElementById('Defalut-text').innerText;
    }
    else{
        document.getElementById('Defalut-text').innerText = document.getElementById('input-text').value;
        document.getElementById('input-text').value = '';
    }
})

