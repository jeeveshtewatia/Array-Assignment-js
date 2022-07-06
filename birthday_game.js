// Birthday Game
// Yatharth and Anamika are playing a game. Anamika loves Yatharth very much and she wants to share a chocolate bar with him in which each of the squares consists of an integer represented by 
// A
// [
// i
// ]
// . 

// She decides to share a contiguous segment of the chocolate bar selected such that the length of the segment matches Yatharth's birth month 
// M
//  and the sum of the integers on the squares is equal to his birthday 
// D
// . 

// You must determine how many ways she can divide the chocolate.


function Birthday_Game(arr, D, M) {
    // function bday(acc,curr){
    //     if(acc+=curr==D){
    //         console.log()
    //     }
    // }
    // let game = arr.filter((acc, curr) => ())
    // console.log(game);
    
    let sum = 0;
    let count = 0;
    for(let i = 0; i < M; i++){
      sum += arr[i];
    }
    if(sum === D){
      count++;
    }
    for(let i = M; i < arr.length; i++){
      sum += arr[i];
      sum -= arr[i - M];
      if(sum === D){
      count++;
    }
    }
    return count;
}
Birthday_Game([2, 2, 1, 3, 2], 4, 2)