const jumps = [5, 5, 8, 7, -1, 5,10,8,9];

// every jump is 3 array element

function avgJumper(arr) {
    let avgJump = [];
    
    for (let i = 0; i < arr.length; i += 3) {
        avgJump.push((arr[i] + ((arr[i + 1] !== -1) ? arr[i + 1] : 0) + arr[i + 2]) / ((arr[i + 1] !== -1) ? 3 : 2));
    }
    return avgJump;
}

console.log(avgJumper(jumps));

function bestAvgJump(avgjump){

    let best=0;
    avgjump.forEach(e => {
        if(e > best){
            best=e;
        }
    });
    return best;
}

console.log("best avg jumper is :",bestAvgJump(avgJumper(jumps)));


function bestJump(jumps) {
    
    let best = 0;
    jumps.forEach(e => {
        if (e > best) {
            best = e;
        }
    });
    return best;
}
console.log(" the best jump is :",bestJump(jumps));