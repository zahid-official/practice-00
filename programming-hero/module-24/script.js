function calculateTax(income, expenses) {
    if(income < 0 || expenses < 0 || income < expenses){
        return "Invalid Input";
    }
    return (income - expenses) * .20;
}





function sendNotification(email) {
    if(typeof email !== 'string' || email.split('@').length -1 !== 1){
        return "Invalid Email";
    }
    email = email.split('@');
    return email[0] + ' sent you an email from ' + email[1];
}





function checkDigitsInName(name) {
    if(typeof name !== 'string'){
        return "Invalid Email";
    }
    let result = false;
    for(const letter of name){
        if(!isNaN(letter) && letter !== ' '){
            result = true;
        }
    }
    return result;
}





function calculateFinalScore(obj) {
    if(typeof obj !== 'object' || Array.isArray(obj)){
        return "Invalid Input";
    }
    let farmar = 0;
    obj.isFFamily === true ? farmar = 20 : 0;

    let score = 0;
    obj.testScore <= 50 ? score = obj.testScore : 0;

    let grade = 0;
    obj.schoolGrade <=30 ? grade = obj.schoolGrade : 0;

    result = farmar + score + grade;
    return result >= 80 ? true : false;
}





function waitingTime(waitingTimes , serialNumber) {
    if(!Array.isArray(waitingTimes) || typeof serialNumber !== 'number'){
        return "Invalid Input";
    }
    let time = 0;
    for(const passed of waitingTimes){
        time += passed;
    }
    let avg = Math.round(time / waitingTimes.length);
    return (avg * (serialNumber -1)) - (avg * waitingTimes.length);
}
