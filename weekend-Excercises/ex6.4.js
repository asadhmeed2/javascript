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

const isOgram = (string) => {
    if (countingDupliclates(string.toLowerCase()) !== 0) {
        return false;
    }
    return true;
}

console.log(isOgram('Dermatoglyphics'));
console.log(isOgram('aba'));
console.log(isOgram('moOse'));