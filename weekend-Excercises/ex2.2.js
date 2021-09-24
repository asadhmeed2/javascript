const toBinary = (array) => {
    let numOfPowerOf2 = 1;
    array.reverse();
    return array.reduce((sum, el) => {
        console.log(el * numOfPowerOf2);
        sum += el * numOfPowerOf2;
        numOfPowerOf2 *= 2;
        return sum;
    },0)

}
console.log(toBinary([1, 0, 1, 1]));
