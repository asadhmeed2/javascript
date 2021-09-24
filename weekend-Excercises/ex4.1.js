const calcTheNElementInFibonacci = (startingNumber, n) => {
    let prev = startingNumber;
    let corrent = 1;
    let temp = 0;
    for (let i = 2; i < n; i++) {

        temp = corrent + prev;
        prev = corrent;
        corrent = temp;

    }
    return corrent;
}

console.log(calcTheNElementInFibonacci(0, 8));
console.log(calcTheNElementInFibonacci(1, 8));