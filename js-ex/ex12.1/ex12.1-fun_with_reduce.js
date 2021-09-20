let numbers =[10,22,43,5,15];


// Write the following functions using the reduce built -in function.

// 1. max
let max =numbers.reduce((num1,num2)=>Math.max(num1,num2));

// console.log('max is :',max);


// 2. sum of even numbers

let sumOfEven = numbers.reduce((sum, num) => (num %2 ===0 ) ? sum +num : sum +0);

// console.log("sum of even numbers is :",sumOfEven);



// 3. average


let avg = numbers.reduce((avg, num) => avg+(num/numbers.length),0);


// console.log("averag of the numbers is : " ,avg);







