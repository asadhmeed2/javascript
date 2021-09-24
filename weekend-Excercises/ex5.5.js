const toInitials = (stirng) => {
    let array = stirng.split(" ");
    let temp = '';
    temp = `${array[0][0].toUpperCase()}.${array[1][0].toUpperCase()}`
    return temp;
}
console.log(toInitials('asad hmeed'));