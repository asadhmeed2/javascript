const calcGrowthOfPopulation = (startPopulation, percentagInGrowth, inhabitantsPerYear, endPopultaion) => {

    let years = 0;

    while (startPopulation < endPopultaion) {
        startPopulation += ((percentagInGrowth / 100) * startPopulation) + inhabitantsPerYear;
        years++;
    }
    return years;
}
console.log(calcGrowthOfPopulation(1500, 5, 100, 5000));
console.log(calcGrowthOfPopulation(1500000, 2.5, 10000, 2000000));