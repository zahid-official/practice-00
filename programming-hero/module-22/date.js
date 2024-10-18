const today = new Date();
// console.log(today.getDate());

const futureDate = new Date(2028, 2, 15); // এখানে মাস দিচ্ছি ২ আউটপুট পাচ্ছি ৩, আবার দিন হচ্ছে ১৫ আউটপুট ১৪ কেন? আর বছরে কোনো পরিবর্তন নেই কেন?

// console.log(futureDate);
// console.log(futureDate.getMonth());

// futureDate.setMonth(10); // এটা আউটপুট ও নিচের কমান্ডের আউটপুট ভিন্ন কেন?
// console.log(futureDate.setMonth(10));

// console.log(futureDate.toLocaleString('en-GB'));// format change