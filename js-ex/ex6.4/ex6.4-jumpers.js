const jumps =[5,5,8 ,7,-1,5];

// every jump is 3 array element

function avgJumper(arr){
    let avgJump =[];
    for (let i = 0; i < arr.length; i+3) {
        avgJump.push((arr[i]+((arr[i+1] !== -1)? arr[i+1]:0)+arr[i+2])/3);
    }
    return avgJump;
}

console.log(avgJumper(jumps));