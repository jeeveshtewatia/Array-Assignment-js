// Unique Color Shirt
// Prepbuddy is very tasteful of clothes. 
// He has 
// N
//  numbers of shirts hanging in the hanger in his wardrobe.
// Prepbuddy likes to wear different colored clothes. So, whenever he see there are two or more shirts with the same color, he removes all the shirt of that color from his wardrobe. Now, he wants to know how many 
// M
//  unique color shirts are left in the wardrobe. 
// Prepbuddy wants you to find 
// M
// .

// Note: As there are many shades of a color so consider integers as a color name.
// i.e, color of shirt is 0,1,2, … , N.


function Unique_Shirts(arr, N) {
    let find = arr.filter((item, i, array) => {
        var count = 0;
        for (i = 0; i < array.length; i++) {
            if (array[i] === item)
                count++;
        }
        return count === 1;
    })
    console.log(find.length)




    // let obj = {};
    // for (let i = 0; i < arr.length; i++) {
    //     let car = arr[i];
    //     if (obj[car] == undefined) {
    //         obj[car] = 1
    //     } else {
    //         obj[car]++;
    //     }
    // }
    // // console.log(obj);
    // for (let i in obj) {
    //     if (obj[i] === 1) {
    //         console.log(i);
    //     }
    // }


}

Unique_Shirts([3, 2, 4, 1, 2, 3], 6);