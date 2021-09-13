const jumps = [5, 5, 8, 7, -1, 5, 10, 8, 9];
const jumps2 = [-1, -1,-1, 7, -1, 5, 10, 8, 9];

// every jump is 3 array element

function avgJumper(arr) {
    let avgJump = [];

    for (let i = 0; i < arr.length; i += 3) {
        let count = 0;
        let newArr = arr.slice(i, i + 3);
        newArr.forEach(e => {
            (e !== -1) ? count++ : 0;
        });

        avgJump.push((((arr[i] !== -1) ? arr[i] : 0) +
            ((arr[i + 1] !== -1) ? arr[i + 1] : 0) 
            + ((arr[i + 2] !== -1) ? arr[i + 2] : 0)) /
            ((count === 0) ? 1 : count))
    }
    return avgJump;
}

console.log(avgJumper(jumps));


function bestAvgJump(avgjump) {

    let best = 0;
    avgjump.forEach(e => {
        if (e > best) {
            best = e;
        }
    });
    return best;
}

console.log("best avg jumper is :", bestAvgJump(avgJumper(jumps)));


function bestJump(jumps) {
    
    let best = 0;
    jumps.forEach(e => {
        if (e > best) {
            best = e;
        }
    });
    return best;
}
console.log(" the best jump is :", bestJump(jumps));


console.log(avgJumper(jumps2));
console.log("best avg jumper is :", bestAvgJump(avgJumper(jumps2)));
console.log(" the best jump is :", bestJump(jumps2));