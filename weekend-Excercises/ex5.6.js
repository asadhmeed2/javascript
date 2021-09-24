const maskify = (string) => {
    if (string.length <= 4) {
        return string;
    }
    let temp = string.split('');

    for (let i = 0; i < temp.length - 4; i++) {
        temp[i] = temp[i] = '#';

    }

    return temp.join('');
}

console.log(maskify("4556364607935616"));
console.log(maskify("64607935616"));
console.log(maskify("1"));
console.log(maskify(""));
