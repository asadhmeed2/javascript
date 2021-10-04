const NUMBER = 10;
function greaterOrLessThan(number) {
    return new Promise((resolve, reject) => {
        if (number > NUMBER) {
            resolve(true)
        } else {
            reject(false)
        }
    });
}
greaterOrLessThan(15).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})