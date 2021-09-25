const map = (callback, array) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result = [...result, callback(array[i])];
    }
    return result;
}

console.log(map((el) => el.id, [{ id: 1, name: 'asad' }, { id: 11, name: 'hmeed' }, { id: 12, name: 'taliaa' }]));