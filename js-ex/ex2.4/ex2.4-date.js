const months=["January","February" , "March","April","May","June","July","August","Septenber","October","November","December"];
const daysOfWeek=["Sundy","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let now = new Date();

let nameOfDay =daysOfWeek[now.getDay()];
console.log(nameOfDay);

let numOfDay =now.getDate();
console.log(numOfDay);

let nameOfMonth =months[now.getMonth()];
console.log(nameOfMonth);

let year =now.getFullYear();
console.log(year);


function dateNewFormat(nameOfDay,numOfDay,nameOfMonth,year){
    return `Today is ${nameOfDay} the ${numOfDay} of ${nameOfMonth}, ${year}`
}
console.log(dateNewFormat(nameOfDay,numOfDay,nameOfMonth,year));