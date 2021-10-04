const hero = {
    health: 5,
    power: 68,
    getStrength: function () {
        if (this.health <= 5) {
            return this.power - 10;
        } else return this.power;
    }
}
function whoIsStronger(getStrength) {
    const myStrength = 82;
    console.log(getStrength());
    if (getStrength() < myStrength) {
        return "I am stronger";
    } else return "You are stronger";
}
console.log(whoIsStronger(hero.getStrength.bind(hero)));
// console.log(whoIsStronger(hero.getStrength));

/*
the this keyword in side a function is defined by the object thats called the function
so  when passing the object hero function it passed by value and it no longer attatched to the hero object (as anagument of the whoIsStronger) so whe must bind the function argument to the object hero and send it to the whoIsStronger function
*/