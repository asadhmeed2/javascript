const food = ["Noodle", "Pasta", "Ice-cream", "Meat",
    "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives",
    "Hamburgers"];

// Create a function that takes these two arrays as arguments.
// Compare these two arrays using 2 for loops and return the
// items that are the same.If none are the same return false.


const compaer =(array1,array2)=>{
    let results =[];
    for (const item1 of array1) {
        for (const item2 of array2) {
            // console.log(`item 1 : ${item1} and item 2 : ${item2}`);
            if(item1===item2){
                if(!results.find(item=>(item ===item1)?item1:undefined)){
                    results=[...results,item1];
                }
            }
        }
    }
    if(results.length === 0){
        return false;
    }
    return results;
}
// console.log(compaer(food,food1));