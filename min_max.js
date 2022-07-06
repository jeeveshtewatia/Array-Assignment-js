// Min and Max
// Congratulations on making up to this question. Let us give you a fairly simple array problem to solve. If you know how to iterate through the array, you will easily be able to solve this.
// The problem statement is simple- given 
// N
//  elements, find the minimum and maximum numbers among those elements.


function arrayMin(arr) {
    let min = arr.reduce((acc, curr) => (acc < curr ? acc : curr))
    console.log(min)

}

arrayMin([3, 1, 4, 6, 2, 7]);

function arrayMax(arr) {

    let max = arr.reduce((acc, curr) => (acc > curr ? acc : curr))
    console.log(max)
}
arrayMax([3, 1, 4, 6, 2, 7]);