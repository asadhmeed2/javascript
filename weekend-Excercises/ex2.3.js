const nextPerfectSquare = (n) =>{
let squareRoot =Math.sqrt(n);
if (squareRoot%1 ===0) {
    return Math.pow(squareRoot+1,2);
    
}
return -1;
}

console.log(nextPerfectSquare(121));
console.log(nextPerfectSquare(625));
console.log(nextPerfectSquare(114));
