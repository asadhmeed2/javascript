// 1. Write a function called doubleValues which accepts an
// array and returns a new array with all the values in the
// array passed to the function doubled.

const doubleValues = (array) => array.map((e) => e * 2);




// 2. Write a function called onlyEvenValues which accepts an
// array and returns a new array with only the even values in
// the array passed to the function.

const onlyEvenValues = (array) => {
    let results = [];
    array.forEach(element => {
        if (element % 2 == 0) {
            results = [...results, element];
        }
    });
    return results;
}



//3. Write a function called showFirstAndLast which accepts
// an array as an argument and returns a new array with only
// the first and last elements from the function’s argument
// array.The returned array should only contain elements that
// are strings.


const showFirstAndLast = (array) => {
    let results = [];
    array.forEach((e, i) => {
        if (i === 0 || i === array.length - 1) {
            results = [...results, e];
        }
    })
    return results;
}


// 4. Write a function called vowelCount which accepts a
// string as an argument.The function should return an object
// which has the count of the number of vowel’s that are in
// the string.The key should be the vowel and the value
// should be the count.e.g. { a: 3, o: 2, u: 4 }.
// Should not be case sensitive.


const vowelCount = (string) => {
    let vowels = { a: 0, e: 0, i: 0, o: 0, u: 0 };
    string.split('').forEach(e => {
        let l = e.toLowerCase();
        if (l === 'a' || l === 'e' || l === 'i' || l === 'o' || l == 'u') {
            vowels[l] += 1;
        }

    })
    return vowels;
}

console.log(vowelCount('asad'));

// 5. Write a function capitalize that takes a string as an
// argument and will return the whole string capitalized.

const capitalize = (string) => {
    return string.split('').map(e => e.toUpperCase()).join('');
}
console.log(capitalize('asad'));



// 6. Write a function called shiftLetters that takes a string as
// an argument and return’s an encoded string with each
// letter shifted down the alphabet by one.


const shiftLetters = (string) => {
    return string.split('').map(e => String.fromCharCode(e.charCodeAt(0) - 1)).join('');
}

console.log("encoded string : ", shiftLetters('asad hmeed'));



// 7. Create a function called swapCase that takes a string as
// an argument and returns a string that every other word is
// capitalized. (you can use the fifth’s exercise's function to
// keep it dry)


const swapCase =(string)=>{
    return string.split(' ').map(e => capitalize(e)).join(" ");
}

console.log(swapCase('you are a programmer'));
console.log(swapCase('programmer'));
