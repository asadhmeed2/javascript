const shortestWords = (string) => {
    let temp = string.split(' ');
    const shortest = temp.reduce((short, el) => (short.length > el.length) ? el : short);

    return shortest.length;
}

console.log(shortestWords('asad hmeed a'));