function getSumOfEven(arr) {
    return arr[1] + arr[3] + arr[5] + arr[7] + arr[9];
}
getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 1. First find the line that contains the problem.Write it down.
// 2 
// 2. Which debug method did you use to find the bug ?
// vs code debuger
// 3. Explain the bug in your own words.
// adding an undefind value to number by calling to the array in invaid index
// 4. Fix the code and submit it all.