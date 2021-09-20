function calcAverage(arr) {
    // var sum ;
    var sum =0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    // return sum;
    return sum/i;
}
calcAverage([85, 90, 92]);
console.log(calcAverage([85, 90, 92]));



// 1. First find the line that contains the problem.Write it
// down.
// 2 ,7
// 2. Which debug method did you use to find the bug ?
// vs code debuger
// 3. Explain the bug in your own words.
//  the sum  variable was not initialize with number value and canot add to it numbers  and thats what caused the NaN output
// and in the return statment need to divid by arr.length to get the average
// 4. Fix the code and submit it all.
