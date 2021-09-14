let myCountry = {
    country: "‘Finland",
    capital: "Helsinki",
    language: "Finnish",
    population: 6,
    neighbours: ["1", "2", "3"],
    describe: function () {
        console.log(`${this.country} has ${this.population} million people, their mother tongue is ${this.language}, they have ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`);
    },
    checkIsland: function () {
        this.isIsland = ((this.neighbours.length > 0) ? false : true);

    }
}

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry.isIsland);


