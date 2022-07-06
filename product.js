// Find the Product.
// Write a program that takes an array as input from the user and find out the product of the elements.

// Note: You have to complete Find_Prod. No need to take any input.

const Find_Prod = (array, N) => {

    // const array = [1, 2, 3, 4, 5];
    const product = array.reduce((acc, curr) => acc = acc * curr);

    console.log(product);
};

Find_Prod([1, 2, 3, 4, 5], 5);