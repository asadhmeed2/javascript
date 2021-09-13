let arrayOfObjects = Array(100);
let obj = {
    name: "asad",
    age: 15,
    lastName: "hmeed"
};

arrayOfObjects.fill(obj, 0);
console.log(arrayOfObjects);


let arrayOfNumbers = Array.from({ length: 100 }, (v, i) => i)


console.log(arrayOfNumbers);


let objArray = Object.values(obj);

console.log(objArray);

//convert aray into object
const newObj = {...objArray}
console.log(newObj);

//find if the array is an array
console.log(Array.isArray(objArray));
//copy that will effect the original
let newObjArray = objArray;
newObjArray.push(['waled', 10, "hmeed"]);
console.log(objArray);
console.log(newObjArray);
//copy that will not effect the orihinal
let newObjArray2 = objArray.slice();
newObjArray2.push(5);
console.log(objArray);
console.log(newObjArray2);


