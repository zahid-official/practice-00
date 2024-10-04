// task-01
// let text = 'I am a student. And I wanna be a web dev';
// text = text.split('a').length;
// console.log(text);





// task-02

// easy way
/* let sentence = 'I am a student. And I wanna be a web dev';
sentence = sentence.toLowerCase();
sentence = sentence.split('a').length -1;
console.log(sentence); */


// another way
// let sentence = 'I am a student. And I wanna be a web dev';
// let count = 0;

// for(i = 0; i < sentence.length; i++){
//     if(sentence[i].toLowerCase() === 'a'){
//         count++
//     }
// }
// console.log(count);



// task-03
// let message = 'A quick brown fox jumps over the lazy dog';
// message = message.toLowerCase();

// if(message.includes('a') && message.includes('e') && message.includes('i') && message.includes('o') && message.includes('u')){
//     console.log('contain all vowels');
// }
// else{
//     console.log('not contain all');
// }







// task-04

// 1st way 
// let chapter = 'The fox quickly EXITS';
// let xChapter = chapter.replace(/x/g , 'y').replace(/X/g , 'Y');

// 2nd way 
// let chapter2 = 'The baby played happilY';
// let yChapter = chapter2.replaceAll('y' , 'x').replaceAll('Y' , 'X');

// changing word
// let changeWord = 'Hello Xa, Hello fa, Hello Da, Hello aa'
// changeWord = changeWord.replace(/Hello/g , "Hi");

// console.log(changeWord);








// task-05                                  

// let sentence = 'DHAKA is the capital of BANGLADESH.';
// sentence = sentence.split(' ');

// for(let i = 0; i < sentence.length; i++){
//     let word = sentence[i];
//     sentence[i] = word[0].toUpperCase() + word.slice(1).toLowerCase();
//   }
//   sentence = sentence.join(' ');
// console.log(sentence);

//  question: word[i] এর ইনডেক্স কিভাবে দেখব।     join লুপের ভিতরে দিলে error সে কেন?












// self task ২০ মডিউল ৭ নাম্বার ভিডিও
// const office = {
//   income: 25000,
//   expenses: 35000,
//   total_burn: 10000,
//   'office staff' : 12,
// }


//error
// let newStaff = 'office staff12';
// office[newStaff] = 15;
// console.log(office);
// console.log(office[newStaff]);
/*question: যদি newStaff কে [] ব্র্যাকেটে রাখি আর কনসোল লগ ডট নোটেশন দিয়ে করি তাহলে undefined আসে, যদি newStaff কে . ডট নোটেশন দিয়ে ধরি আর কনসোল লগ কেবল [] ব্র্যাকেট নোটেশন 
দিয়ে করি কোটেশন ছাড়া তাহলে ১২ আসে, আর যদি কোটেশন দিয়ে করি তাহলে ১৫ আসে কেন? */

// loop ২০ মডিউল ৯ নাম্বার ভিডিও


// for(let details in office ){
//   console.log(details);
// }


  // question: এখানে [] ব্র্যাকেটের পরিবর্তে ডট নোটেশন দিলে undefined কেন আসে? আর এখানে details টা কি key কেই কেবল ধারন করছে? যদি এটা key ধারন করে তাহলে ভ্যালু কেন দিচ্ছে না একসাথে? নোটেশন দিয়ে কেন আনতে হচ্ছে?

// let elements = Object.keys(office);
// console.log(elements);


  // question: Object.keys এটা array কিভাবে হলো তা বুঝিনি?
