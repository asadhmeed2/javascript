const toWeirdCase = (string) => {
    let temp = string.split('');
    let count = 0;
    for (let i = 0; i < temp.length; i++) {
        if (temp[i] === ' ') {
            count = 0;
        } else {
            console.log(count % 2 === 0);
            if (count % 2 === 0) {
                temp[i] = temp[i].toUpperCase();
                count++;
            } else {
                temp[i] = temp[i].toLowerCase();
                count++;
            }
        }

    }
    return temp.join("");
}
console.log(toWeirdCase('asad hmeed'));