const data = [
    {
        name: "John",
        birthday: "1-1-1995",
        favoriteFoods: {
            meats: ["hamburgers", "sausages"],
            fish: ["salmon", "pike"],
        },
    },
    {
        name: "Mark",
        birthday: "10-5-1980",
        favoriteFoods: {
            meats: ["hamburgers", "steak", "lamb"],
            fish: ["tuna", "salmon", "barracuda"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["ham", "chicken"],
            fish: ["pike"],
        },
    },
    {
        name: "Thomas",
        birthday: "1-10-1990",
        favoriteFoods: {
            meats: ["bird", "rooster"],
            fish: ["salmon"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["hamburgers", "lamb"],
            fish: ["anchovies", "tuna"],
        },
    },
];

// 1. Create a function that returns all the names from the array.

const getNames = (array) => {
    return array.map(e => e.name);
}

// 2. Create a function that returns all the objects that are born before 1990.

const bornBefore1990 = (array) => {
    return array.filter(e => {
        return Number(e.birthday.split('-')[e.birthday.split("-").length - 1]) < 1990
    }
    );
}


console.log(bornBefore1990(data));



// 3. Create a function that returns an object of all the different foods from all
// the objects as the key and the number of times that food is present in all the
// objects as the value.


const foods = (array) => {
    let favoriteFoods = {};

    array.forEach(e => {
        let food = e.favoriteFoods;
        for (const key in food) {
            
            for (const foodName of food[key]) {
               
                if (foodName in favoriteFoods) {
                    favoriteFoods['' + foodName] += 1;

                } else {
                    favoriteFoods['' + foodName] = 1;
                }
            }
        }

    });
    return favoriteFoods;
}


console.log(foods(data));

