// nested conditions
const money = 1200;

if(money >= 500){
    if(money >=1200){
        console.log('You Can eat Briyani, Borhani, Kabab, Polao, Beef and Chicken with Speacial Salad');
    }
    else if(money >=1000){
        console.log('You Can eat Only Borhani, Polao, Beef and Chicken');
    }
    else if(money >=800){
        console.log('You Can eat Only Polao and Chicken');
    }
    else{
        console.log('Allowed only for dal-vaat');
    }
}

else{
    if(money >=400){
        console.log('You Can eat Ruti and Dal-Bhaji');
    }
    else if(money >=200){
        console.log('You Can eat Kola-Ruti');
    }
    else if(money >=100){
        console.log('You Can eat Cha-kola');
    }
    else{
        console.log('get out');
    }
}
