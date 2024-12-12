/* class Biodata {
    name = 'Zahid';
    age = 25;
    weight = 75;
    
    functionality(){
        console.log('This text will not work until new object created and pass argument');
    }
}
console.log(new Biodata()); */


// class Biodata {
//     name = 'Zahid';
//     age = 25;
//     weight = 75;
    
//     functionality(text, text2){
//         console.log(`hi ${text} & ${text2}`);
//     }
// }
// const product = new Biodata();
// product.functionality('Zahid', 'Nahid');










// class NidForm{
//     fillForm(personName, age){
//         this.name = personName;
//         this.age = age;
//     }
//     submitForm(){
//         console.log(`(Name: ${this.name}, Age: ${this.age}): Your Nid Form is Submited`);
//     }

//     cancelForm(){
//         console.log(`(Name: ${this.name}, Age: ${this.age}): Your Nid Form is Canceled`);
//     }
// }

// let zahidForm = new NidForm();
// zahidForm.fillForm('Zahid', 25)
// zahidForm.submitForm();

// let ronyForm = new NidForm();
// ronyForm.fillForm('Rony', 32)
// ronyForm.submitForm();
// ronyForm.cancelForm();





// by constructor 
class NidForm{
    constructor(personName, age){
        this.name = personName;
        this.age = age;
    }
    submitForm(){
        console.log(`(Name: ${this.name}, Age: ${this.age}): Your Nid Form is Submited`);
    }

    cancelForm(){
        console.log(`(Name: ${this.name}, Age: ${this.age}): Your Nid Form is Canceled`);
    }
}

let zahidForm = new NidForm('Zahid', 25);
zahidForm.submitForm();

let ronyForm = new NidForm('Rony', 32);
ronyForm.submitForm();
ronyForm.cancelForm();