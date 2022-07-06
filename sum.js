// Find the Sum.
// Write a program which takes an array as input from the user and find out the sum of the array elements.

// Note: You have to complete Find_Sum. No need to take any input.


const Find_Sum = (array, N) => {

    let sum = array.reduce((acc, curr) => acc += curr);
    console.log(sum)
};
Find_Sum([1, 2, 3, 4, 5], 5);