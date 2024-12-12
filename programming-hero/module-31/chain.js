const company = {
    mobile : [
        {samsung: 'Galaxy', price: 100000},
        {hwawei: 'Mate', price: 75000},
        {iphone: 'Pro', price: 195000},
        {realme: [
            {model: 'GT', price: 71000},
            {model: 'Number', price: 38000},
            {model: 'Narzo', price: 21000},
            {model: 'C', price: 14000},
        ]} 
    ],


    laptop : [
        {lenovo: 'thinkpad', price: 160000},
        {hp: 'Elite', price: 235000},
        {dell: {
           model: 'latitude', price: 168500
        }},
        {hwawei: 'MateBook', price: 175000},
        {macbook: 'Pro Max', price: 395000},
        {asus: [
            {model: 'TUF', price: 271000},
            {model: 'Zenbook', price: 138000},
            {model: 'Vivobook', price: 79000},
        ]} 
    ]
}
// console.log(company.mobile[3].realme[1].price);
console.log(company.laptop[2].dell?.model); 

//এখানে dell এ সমস্যা হলে তাতে optional chaining ব্যবহার করা যায় কিন্তু laptop এর নামে ভুল হলে optional chaining ব্যবহার করা যায় না কেন?