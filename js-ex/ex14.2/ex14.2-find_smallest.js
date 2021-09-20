function findSmallest(a, b, c) {
    if (a > b > c) {
        return c;
    } else if (a > c > b) {
        return a;
    } else {
        return b;
    }
}
findSmallest(52, 66, 2)
console.log(findSmallest(52, 66, 2));
// findSmalest(52, 66, 2);

// 1. First find the line that contains the problem.Write it down.
//10
// 2. Which debug method did you use to find the bug ?
//vs code debuger(i can find the bug with out vs code debuger)
//3. Explain the bug in your own words.
// the function find Smallest was misspelled wen called upon 
// 4. Fix the code and submit it all.
// the code is fixed




