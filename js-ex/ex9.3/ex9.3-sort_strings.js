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
    "Z"
];
foodsWithUpperCaseCoby = [...foodsWithUpperCase];
foodsWithUpperCase.sort((a,b) => {
    

    return a.toLowerCase().charCodeAt(0) - b.toLowerCase().charCodeAt(0);
});


foodsWithUpperCaseCoby.sort((a,b)=>{
   
    return b.toLowerCase().charCodeAt(0) - a.toLowerCase().charCodeAt(0);
});



console.log("foods with upper case ascending order", foodsWithUpperCase);
console.log("foods with upper case descending order", foodsWithUpperCaseCoby);



// longest word
const words = ["apple", "supercalifragilisticexpialidocious",
    "hi", "zoo"];


    words.sort((a,b)=> a.length - b.length);
console.log("sort according to the word length ascendingly",words);