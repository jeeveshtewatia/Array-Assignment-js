// Pass or Fail
// You are given an array 
// A
//  containing the maths marks of students in your class, and your task is to determine if all the students pass in your class or not. A student is declared pass if his maths marks are greater than or equal to 
// 32
// .

// If all the students pass in your class, return "YES" (without quotes); otherwise, return "NO" (without quotes).

// Note: You have to complete isAllPass function. No need to take any input.


const isAllPass = (N, Arr) => {
    let marks = Arr.filter(arr => arr >= 32);
    if (Arr.length === marks.length) {
        console.log("YES");
    } else {
        console.log("NO");
    }
};

isAllPass(7, [13, 89, 45, 98, 67, 45, 54])