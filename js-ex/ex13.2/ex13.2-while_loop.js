const arr = ["boo", "doooo", "hoo", "ro"] ;



// Write a function that will receive an array of strings and will return a new
// array containing all the lengths of all the strings in the array it got as a
// parameter.
const arrayOfLength=(arr)=>{
    let i =0;
    let results=[];
    while(i<arr.length){
        results =[...results ,arr[i].length];
        i++;
    }
    return results;
}
// console.log(arrayOfLength(arr));

//i like the for loop in this situation becuse we declare less variables in the parent scope