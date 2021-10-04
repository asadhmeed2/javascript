function makeAllCaps(arrayOfStrings) {
    return new Promise((resolve, reject) => {
        let notString = arrayOfStrings.find((element) => typeof element !== 'string')
        if (!notString) {

            resolve(arrayOfStrings.map(word => {
                return word.toUpperCase();
            }))
        } else {
            reject('error array is not array of strings')
        }
    });
}
function sortWords(arrayOfStrings) {
    return new Promise((resolve, reject) => {
        let notString = arrayOfStrings.find((element) => typeof element !== 'string')
        if (!notString) {
            let array = [...arrayOfStrings];
            resolve(array.sort());
        } else {
            reject('error array is not array of strings')
        }
    });
}




makeAllCaps(["asad", 'hmeed', 'wajde']).then((data) => {
    console.log(data);
}).catch(err => {
    console.log(err);
})
makeAllCaps(["asad", 'hmeed', 2, 'wajde']).then((data) => {
    console.log(data);
}).catch(err => {
    console.log(err);
})

sortWords(["asad", 'hmeed', 'amjd', 'wajde']).then((data) => {
    console.log(data);
}).catch(err => {
    console.log(err);
})
sortWords(["asad", 'hmeed', 2, 'wajde']).then((data) => {
    console.log(data);
}).catch(err => {
    console.log(err);
})


