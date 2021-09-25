const filter = (callback, array) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            result = [...result, array[i]];
        }
    }
    return result;
}

console.log(filter((el) => el.id > 10, [{ id: 1, name: 'asad' }, { id: 11, name: 'hmeed' }, { id: 12, name: 'taliaa' }]));