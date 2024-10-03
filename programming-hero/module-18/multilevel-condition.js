// multi level conditions
const buy = 2000;

if(buy >= 10000){
    //20% discount
    const discount = buy *20 / 100;
    const pay = buy - discount;
    console.log(pay);
}
else if(buy >= 7500){
    // 15% discount
    const discount = buy *15 / 100;
    const pay = buy - discount;
    console.log(pay);
}
else if(buy >= 5000){
    // 10% discount
    const discount = buy *10 / 100;
    const pay = buy - discount;
    console.log(pay);
}
else if(buy >= 3000){
    // 5% discount
    const discount = buy *5 / 100;
    const pay = buy - discount;
    console.log(pay);
}
else{
    console.log(buy);
}


