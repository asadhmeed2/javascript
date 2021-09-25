const shortestWords = (string) => {
    let temp = string.split(' ');
    const longest = temp.reduce((long, el) => (long.length < el.length) ? el : long);

    return temp.filter(e => e.length === longest.length);
}

console.log(shortestWords('asad hmeed a'));