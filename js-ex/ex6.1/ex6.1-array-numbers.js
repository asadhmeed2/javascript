const arr = [1, 7, 3, 0, -5, 7, 3, 9];

for (let i = 0; i < arr.length; i++) {
    console.log('index ', i + " : ", arr[i]);

}
function arrayLength(arr) {
    let count = 0;
    arr.forEach(e => {
        count++;
    });

    return count;
}


function arraySum(arr) {
    let sum = 0;
    arr.forEach(e => {
        sum += e;
    });
    return sum;
}
function arrayMulti(arr) {
    let multi = 1;
    arr.forEach(e => {
        multi *= e;
    });
    return multi;
}
console.log('arrays length is :', arrayLength(arr));

console.log('arrays sum is :', arraySum(arr));

console.log('arrays elements multiplication is :', arrayMulti(arr));