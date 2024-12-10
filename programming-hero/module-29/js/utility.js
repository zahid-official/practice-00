function getId(id){
    return document.getElementById(id);
}

function getText(id){
    const elementText = document.getElementById(id);
    return elementText.innerText;
}

function getValue(id){
    const inputValue = document.getElementById(id);
    return parseFloat(inputValue.value);
}

function getNumber(id){
    const tagText = document.getElementById(id);
    return parseFloat(tagText.innerText);
}
