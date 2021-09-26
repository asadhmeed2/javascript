const myFirstDiv = document.querySelector("#myFirstDiv");
const mySecondDiv = document.querySelector("#mySecondDiv");
const myThirdDiv = document.querySelector("#myThirdDiv");
const myFourthDiv = document.querySelector("#myFourthDiv");


let dives =Array.from( document.querySelectorAll('div'));
dives.map((el)=>{
    el.style.background = 'red';
    el.style.border ='solid 1px black'
})


