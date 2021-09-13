
const worldPopulation = 7900;
// population must etered in milions 
function percentageOfWorld1(population){

    return (population/worldPopulation)*100;

}
console.log("usas percentage of the world populattion is : ",percentageOfWorld1(328.2));
console.log("Isreali percentage of the world populattion is : ",percentageOfWorld1(9.053));
console.log("egyption percentage of the world populattion is : ",percentageOfWorld1(100.4));


const percentageOfWorld2= function (population){

    return percentageOfWorld1(population);
    
}
console.log("usas percentage of the world populattion is : ",percentageOfWorld2(328.2).toFixed(3));
console.log("Isreali percentage of the world populattion is : ",percentageOfWorld2(9.053).toFixed(3));
console.log("egyption percentage of the world populattion is : ",percentageOfWorld2(100.4).toFixed(3));