const getIDs = async () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([532, 543, 753, 1, 5]);
        }, 1500);
    });



const getRecipe = async (recipeID) => {
    return new Promise((resolve, reject) => {
        setTimeout(
            (ID) => {
                const recipe = {
                    title: "Fresh tomato pasta",
                    publisher: "Pinchas Hodadad",
                };
                resolve(`${ID}: ${recipe.title}`);
            },
            1500,
            recipeID
        );
    });
};
let IDs = await getIDs()
try {
    console.log(IDs);
    let recipe = await getRecipe(IDs[2]);
    console.log(recipe);
} catch (err) {
    console.error(err);
    console.log("It is an error!");
}


