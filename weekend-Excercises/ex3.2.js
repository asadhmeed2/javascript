const calcThePeopleOnTheBus = (array2d) => {
    return array2d.reduce((pl, el) => {
        pl += el[0] - el[1];
        return pl;
    }, 0);
}

const array =[[5,0],[3,2],[0,3]];
console.log(calcThePeopleOnTheBus(array));