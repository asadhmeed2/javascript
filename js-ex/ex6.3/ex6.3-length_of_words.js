const arr=["boo","doooo","hoo","ro"];


function lengthOfAllStringInArray(arr){
    let lengthArray=[];
    arr.forEach(e => {
        lengthArray.push(e.length);
    });

    return lengthArray;
}

console.log(arr , lengthOfAllStringInArray(arr));