const forEach = (callback, array) => {

    for (let i = 0; i < array.length; i++) {
        callback(array[i],i);
    }

}

console.log(forEach((el) => console.log(el), [{ id: 1, name: 'asad' }, { id: 11, name: 'hmeed' }, { id: 12, name: 'taliaa' }]));