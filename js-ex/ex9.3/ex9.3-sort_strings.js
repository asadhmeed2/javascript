const foods = ["falafel", "sabich", "hummus", "pizza with extrapineapple"];
const foodsCopy = [...foods];
//ascending
foods.sort()


// descending
foodsCopy.sort();
foodsCopy.reverse();


console.log("foods ascending order",foods);
console.log("foods descending order",foodsCopy);



const foodsWithUpperCase = [
    "falafel",
    "Sabich",
    "hummus",
    "pizza with extra pineapple",
];
foodsWithUpperCaseCoby = [...foodsWithUpperCase];
foodsWithUpperCase.sort();
foodsWithUpperCase.reverse();

foodsWithUpperCaseCoby.sort();



console.log("foods with upper case ascending order", foodsWithUpperCase);
console.log("foods with upper case descending order", foodsWithUpperCaseCoby);



// longest word
const words = ["apple", "supercalifragilisticexpialidocious",
    "hi", "zoo"];


    words.sort((a,b)=> a.length - b.length);
console.log("sort according to the word length ascendingly",words);