const numbers = [1, -5, 666, 2, 400, 11];
let numbers2 =[...numbers];
let ascendingSortedNumbers = numbers.sort((num1 ,num2)=> num1-num2);
let descendingSortedNumbers = numbers2.sort((num1 ,num2)=> num2-num1);


console.log(ascendingSortedNumbers);
console.log(descendingSortedNumbers);