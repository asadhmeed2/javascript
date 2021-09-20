function countOccurrences(str, char) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            // counter + 1;
            counter +=1;
        }
    }
    return counter;
}
countOccurrences("ini mini miny moe", "n");



// 1. First find the line that contains the problem.Write it
// down.
//5
// 2. Which debug method did you use to find the bug ?
// vs code debuger
// 3. Explain the bug in your own words.
//  the counter is incremented correctly
// 4. Fix the code and submit it all.