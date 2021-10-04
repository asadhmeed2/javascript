
function makeAllCaps(arrayOfStrings) {
    return new Promise((resolve, reject) => {
        resolve(arrayOfStrings.map(word => {
            if (typeof word !== "string") {
                reject('error array is not array of strings');
            }
            return word.toUpperCase();
        }))
    })
}
function sortWords(arrayOfStrings) {
    return new Promise((resolve, reject) => {
        resolve([...arrayOfStrings].map((word) => {
            return typeof word === 'string' ? word : reject("error array is not array of strings")
        }).sort((a, b) => a.localeCompare(b)));
    });
}
makeAllCaps(["asad", 'hmeed', 'wajde']).then((data) => {
    sortWords(data).then((data) => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    })
}).catch(err => {
    console.log(err);
})
makeAllCaps(["asad", 'hmeed', 2, 'wajde']).then((data) => {
    sortWords(data).then((data) => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    })
}).catch(err => {
    console.log(err);
})







