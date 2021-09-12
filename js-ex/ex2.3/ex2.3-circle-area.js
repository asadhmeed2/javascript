function calcCircleArea(radius){
    return Math.PI * (Math.pow(radius,2));
}
let area=calcCircleArea(2);
console.log(area);
console.log(area.toFixed(2))