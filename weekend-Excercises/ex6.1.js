const accum = (string) => {
    let stringCopy = string;
    let array = stringCopy.split('').map((el) => {
        let repeatedChar = el.toUpperCase();

        repeatedChar += el.repeat(stringCopy.indexOf(el)).toLowerCase();
        stringCopy = stringCopy.replace(el, '1');
        return repeatedChar;
    })
    return array.join("-");
}
console.log(accum('RqaEzty'));
console.log(accum('asad'));