let arr1 =[1,5,2,8]
let arr2 =[1,5,2,8]


function getSum(arr1, arr2) {
    let sum = 0;
    // const sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        sum += arr1[i];
    }
    for (let i = 0; i < arr2.length; i++) {
        sum += arr2[i];
    }
    return sum;
}
// getSum([1, 2, 3][5, 66, 23]);
getSum([1, 2, 3],[5, 66, 23]);


// 1. First find the line that contains the problem.Write it down.
//thirs more then on problem and they are on lines 6,16,14

// 2. Which debug method did you use to find the bug ?
//vs code debug using node.js mode

//3. Explain the bug in your own words.
// the variable sum initialize as a constant and wase reasigned to a new value 
// getSum function was called upon with incorrect input
// getSum is with no return statement



// 4. Fix the code and submit it all.
// the code is fixed