// Count Occurrences
// You are given an array 
// A
//  containing 
// N
//  integer elements and an integer 
// K
// , and your task is to return the count of occurrences of 
// K
//  in array 
// A
// .

// Note: You have to complete findCount function. No need to take any input.

const findCount = (N, K, Arr) => {
    let count = Arr.filter(item => (item === K))
    console.log(count.length);
};
findCount(4, 3, [3, 3, 1, 2]);