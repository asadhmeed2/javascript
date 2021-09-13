let numOfSiblings = prompt("How many siblings do you have?");

// if(numOfSiblings == 1){
//     console.log("1 sibling!");
// }else if(numOfSiblings > 1){
//         console.log('More than 1 sibling');
// }else {
//     console.log('No siblings');
// }
//up antil now the code works fine 




// if(numOfSiblings === 1){
//     console.log("1 sibling!");
// }else if(numOfSiblings > 1){
//         console.log('More than 1 sibling');
// }else {
//     console.log('No siblings');
// }
// the chenge from the tow equal signs to the triple equal signs creat bug wen entering 1 in the prompt and thats becuse numSiblings is string and 1 is number and === checks the value and the type of the tow variables

if(Number.parseFloat(numOfSiblings) === 1){
    console.log("1 sibling!");
}else if(Number.parseFloat(numOfSiblings) > 1){
        console.log('More than 1 sibling');
}else {
    console.log('No siblings');
}
//the code is runing as expacted



