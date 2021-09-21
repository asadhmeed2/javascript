function findSmallest(a, b, c) {
    if (a > c && b> c) {
        return c;
    } else if (a > b && c > b) {
        return b;
    } else {
        return a;
    }
}
// findSmalest(52, 66, 2);
findSmallest(52, 66, 2)
// console.log(findSmallest(52, 66, 2));

// 1. First find the line that contains the problem.Write it down.
//10 2 4 5 7
// 2. Which debug method did you use to find the bug ?
//vs code debuger(i can find the bug with out vs code debuger)
//3. Explain the bug in your own words.
// the function find Smallest was misspelled wen called upon and the function return a wrang output
// 4. Fix the code and submit it all.
// the code is fixed




