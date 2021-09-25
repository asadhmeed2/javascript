const countingDupliclates = (string) => {
    let obj = {};
    let counter = 0;
    string.split('').forEach(el => {
        if (!obj[el + '']) {
            obj[el + ''] = 1
        } else {
            obj[el + '']++;
        }
    });
    for (const char in obj) {
        if (obj.hasOwnProperty(char)) {
            if (obj[char] > 1) {
                counter++;
            }

        }
    }
    return counter;
}

console.log(countingDupliclates('adadssddgg'));