// Find whether the number is present or not
// Write a program which takes an array as input from the user and a number.
// Check whether the number is present or not.

// Note: You have to complete Find_Num. No need to take any input.


const Find_Num = (array, N, M) => {
    let find = array.includes(2);
    if (find === true) {
        console.log("YES");
    } else {
        console.log("NO");
    }


};
Find_Num([1, 2, 3, 4, 5], 5, 2);